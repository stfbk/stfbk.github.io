---
title: DoS Attacks in Available MQTT Implementations
subtitle: Investigating the Impact on Brokers and Devices, and supported Anti-DoS Protections
paper: IOTSECFOR2021
conference: The 5th International Workshop on Security and Forensics of IoT (IoT-SECFOR)

people:
    - UmbertoMorelli
    - IvanVaccari
    - SilvioRanise
    - EnricoCambiaso
	
---

## Test results and configurations are available [here](https://drive.google.com/drive/u/2/folders/11QRE0hcDqyv3qZZoXZOOv0iILZmdNnkH).

## Summary
The Internet of Things is a widely adopted and pervasive technology, but also one of the most conveniently attacked given the volume of shared data and the availability of affordable but insecure products. In most cases, if attackers cannot exploit security gaps and privacy issues to exfiltrate data, they can (and most probably will) damage the service by performing Denial of Service (DoS) attacks towards the backend, the connected clients or external services.

In this work we investigated two classes of DoS attacks that target the handling of message queues in MQTT, one of the most broadly used IoT protocols; ref. [here](https://www.hivemq.com/mqtt-protocol/) for an introduction to MQTT and its capabilities. 

- The first attack attempts to saturate the MQTT broker resources by sending many heavy messages on different topics with or without a set of subscribed clients. This is due to the broker storing all the messages (up to a queue limit) for each subscribed client; and will compromise the service as the broker is a single-point-of-failure. 
  The attack succeeds if the use of queues (associated with subscribed clients) impacts the broker resources (disk/RAM/CPU) or if the machine hosting the broker reaches 100% usage of CPU or network bandwidth.
- The second, that can be describe as an [amplification attack](https://www.radware.com/security/ddos-knowledge-center/ddospedia/amplification-attack) in the context of MQTT, prescribes sending heavy messages periodically to mount a DoS attack towards the resource-constrained clients connected to the broker.
  The attack succeeds if the clients are prevented from receiving other/all messages and use CPU resources to keep attempting the receiving of heavy ones. It is also worth mentioning that, if clients with a persistent session forcefully disconnect, the broker will queue all new messages (up to the configured limit) and attempt the forwarding once again when they reconnect; including the heavy ones that affect clients CPU. 

We investigated the effectiveness of the attacks with two testbeds and three open-source MQTT broker implementations <ins>deployed with the default configuration</ins>: [Mosquitto](https://www.mosquitto.org) v.1.6.9, [VerneMQ](https://vernemq.com) v.1.11.0 and [EMQ X](https://www.emqx.io/products/broker) v.4.1.5. To simulate clients, we used the MQTT Python library [Paho](https://www.eclipse.org/paho).

### Results of the DoS against the MQTT brokers under test
- All brokers RAM usage is affected by the publishing of messages:
  - In Mosquitto it is possible to saturate the RAM and swap spaces (and be killed by the system) with just one malicious connected client; in VerneMQ and EMQ X, it is necessary to use multiple concurrent clients. 
    However, attacking EMQ X requires a much longer amount of time due to the limit (by default) on the payload size.
- In VerneMQ it is possible to attack the disk as it stores (by default) received messages on the disk.
- To attack the CPU usage, we used up to 400 concurrent clients (400 publishers and in the second test run 400 subscribers). When also using the subscribers (that connect with a certain quality of service and disconnect before the publishing begins), the attack is successful only in EMQ X: starting from 250 concurrent publishers, the CPU usage is on average over 80% (93% peak use). In the worst case, Mosquitto have an increment of 7.75% and VerneMQ 14.4%.
  - During the test, Mosquitto will use only one CPU core being single-threaded; VerneMQ and EMQ X will use concurrently all cores at the same CPU level with minimal variations.

### Results of the Amplification Attack
- The use of TLS strongly affects the maximum payload size and the processing time: a message with a 255MB payload (the maximum supported) was only received with the plaintext configuration, and the processing time when using TLS is about ten times longer.
- A connected client is unable to concurrently receive other messages, and it uses one of the CPU core for longer periods of times. This enables an attacker to prevent the client from receiving (potentially important) messages or overheating it by periodically sending one message of the maximum supported size.
- There is no difference in terms of performance between TLS 1.2 and 1.3 (in the case of Mosquitto), MQTT v.3.1.1 and v.5.0, or if using the ACLs as authorization mechanism.
- The average time required by the subscribers to receive queued messages increases linearly.

To improve the security awareness in MQTT-based deployments, we integrate the attacks and mitigations in [MQTTSA](https://github.com/stfbk/mqttsa), a tool that detects MQTT (mis)configurations and provides security-oriented recommendations and configuration snippets. 

Finally, we identified the settings in the MQTT brokers under test that would preventing or support (if misconfigured) a DoS attack.

### Settings associated with Denial of Service attacks in Mosquitto, VerneMQ and EMQ x

#### Eclipse Mosquitto

Settings to limit message size:

- *max_inflight_bytes*, unbounded by default, sets the total byte limit of messages being transmitted.
- *max_packet_size*, 250MB by the protocol specification (although the real limit depends on the hardware capabilities of the clients), sets the maximum packet size (headers and payload). In case of MQTT v.5, clients are notified of the limit (with the reason code) upon being disconnected by the broker.
- *message_size_limit*, unbounded by default, sets the maximum supported payload size in PUBLISH messages.

Settings to limit message rate:

- *max_inflight_messages*, 20 by default, sets the maximum number of outgoing QoS 1/2 messages that can be in the process of being transmitted.

Settings to limit active connections:

- *max_connections*, unbounded by default but limited by the host OS, limits the total number of connected clients.
- *persistent_client_expiration*, non-standard as OASIS specifications and set to do not expire by default, would allow to expire the session of persistent clients if they do not reconnect within a certain time frame.

Settings associated with message queues:

- *max_queued_messages*, 1000 as of version 2.0 (100 as of the latest Mosquitto 1.6.x), sets the maximum number of QoS 1/2 messages to hold in the queue (per client) in addition to in-flight messages.
- *max_queued_bytes*, also unbounded, sets instead a threshold over queued QoS 1/2 messages to be sent.
- *queue_qos0_messages*, non-standard as OASIS specifications and disabled by default, would allow to queue QoS 0 messages as supported for QoS 1 and 2.
- *upgrade_outgoing_qos*, disabled by-default, would allow to upgrade the QoS of published messages in case subscribed clients use an higher QoS value.

Settings affecting broker disk I/O:

- *persistence*, if enabled, allows to store the in-memory database to disk (connections, subscriptions and message data); when restarting the broker, it will be initialised with all the information. The value *autosave_interval* specifies the time frame (in seconds) that the broker waits before saving the in-memory database. Similarly, *autosave_on_changes* allows the saving when exceeding a threshold on the number of messages (received and queued) and subscription changes. Misconfiguring the storing of the database or setting a low threshold might compromise the performance of the broker.
- *log_dest* would allow to store log entries on the disk and *log_type* sets the amount of information to log: the destination is set by default to *stdout*, while the type to *error*, *warning*, *notice* and *information*.

Settings affecting broker memory usage:

- *memory_limit*, unbounded by default, sets an hard limit on the memory used by the broker.

Settings preventing the Slow-DoS attack:

- *max_keepalive* allows, in case of MQTT5 clients, to override the keepalive value provided by clients; thereby preventing the slow-dos attack reported in .

Additional settings that can limit or support DoS attacks:

- *check_retain_source*, enabled by default, controls the source of a retained message for access rights before republishing it. This prevents, for instance, the publishing of messages from malicious clients whose access have been revoked; and, for instance, the re-publishing of an heavy retained message to a client that keeps attempting the receiving and crashing (due to the message size).
- *retain_available* allows to disable retained messages.

#### VerneMQ

Settings to limit message size:

- *max_message_size* as the Mosquitto *message_size_limit*.
- *tcp.buffer_sizes* allows to set the kernel *send* and *receive* buffer, and the user-level buffer for TCP-based connections.

Settings to limit message rate:

- *max_inflight_messages* as in Mosquitto.
- *max_message_rate*, unlimited by default, specifies the maximum incoming publish rate per session per second.

Settings to limit active connections:

- *max_connections*, as in Mosquitto but 10'000 by default.
- *persistent_client_expiration* as in Mosquitto.
- *allow_multiple_sessions*, disabled by default, non-standard as OASIS specifications and to be deprecated, allows the connection of multiple clients with the same client ID. This would allow an attacker to connect and (mis)use the service without triggering any alarm in case of stolen credentials.

Settings associated with message queues:

- *max_online_messages* and *max_offline_messages* (both 1'000 by default) set the maximum number of QoS 1/2 messages that can be queued for connected or abruptly-disconnected clients, respectively.
- *upgrade_outgoing_qos* as in Mosquitto.

Settings affecting broker disk I/O:

- *log.console* and *log.console.level* are the equivalent to Mosquitto *log_dest* and *log_type*. However, they former is set to store the entries in a file.

Settings affecting broker memory usage:

- *nr_of_acceptors* sets the number of concurrent processes waiting for new connections, 10 by default. This setting is responsible to the use of all CPU cores in the tests.
- Erlang-specific settings, such as *async_threads* (that sets the number of asynchronous threads in the Erlang VM), that modify the behaviour of the Erlang runtime system that runs the broker.
- *maximum_memory.percent*, 70 by default configuration file, sets the maximum percentage of memory allocated by the in-memory DB (that stores connections, subscriptions and message data for persistent sessions). In our tests, however, that threshold can be temporarily exceeded (up to 85%) if the broker is under heavy load from concurrent publishers.

Additional settings that can limit or support DoS attacks:

- *retry_interval*, 20 seconds by default, sets the retry interval for unacknowledged QoS 1/2 messages. This can affect the performance of the broker (if the treashold is too low) or possibly resouce-constrained clients (e.g., if the broker keep attempting the sending of an heavy messages each minute and the client is set to connect with the same timing).
- *max_last_will_delay* allows to specify the maximum delay for last will messages.

Further investigation is necessary for the *suppress_lwt_on_session_takeover* and *receive_max_client* parameters as possibly related to DoS attacks on connected clients but not described in the documentation.

#### EMQ X settings

Considering the amount of parameters available to customize the  broker with respect to the MQTT protocol and the Erlang runtime  environment, in the following we provide an high-level description of  the EMQ X distinguishing features. Ref. [here](assets/IOTSECFOR2021/Broker_Parameters_(M)=misconfigurable.xlsx) for a comprehensive list.

- Retain messages configuration (enabled by default) allows to specify the destination, expiration (replaced by the one in the PUBLISH packet if indicated), and limit the number of messages or payload size.
- Rate limiting allows to set quotas and restrict the number of  connection and its rate, the number of publish messages and in general  TCP packets.
- The monitoring and alarm features supports configuring thresholds on the number of triggered alarms, CPU and memory usage (percentage),  number of processes and default behaviour (log the event or report it to specific topics). In addition, it is possible to detect frequent  disconnections (ref. to 'flapping detection' in the documentation)  and set a ban interval; and monitor the broker status via an  'heartbeat' signal.
- It is finally possible to set low-level settings, such as the  number of threads, concurrent processes and memory limits, RPC  configuration and TCP buffers. Then, to disable the use of wildcards in  subscriptions or retain messages, set a limit and timeout for MQTT QoS 2 acknowledgements (PUBREL) and configure topic priorities.
- logging ( 'warning' by default), *max_packet_size* (1MB by default), *upgrade_qos* (disabled), *max_inflight* (32 messages), *retry_interval* (30s), *session_expiry_interval* (2h), *max_mqueue_len* (1'000), *mqueue_store_qos0* (**true**), connection acceptors (in EMQ X specific to the type of connection, and if on the same system or external) and *max_connections* (1'024'000), all function as in Verne MQ.
