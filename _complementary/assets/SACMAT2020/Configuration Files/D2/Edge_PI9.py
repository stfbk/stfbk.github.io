#!/usr/bin/python3
import time, sys
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient

def customOnMessage(client, userdata, message):
    rec_time = int(round(time.time() * 1000))
    print(str(rec_time) + " : " + message.topic, flush=True)

def_endpoints = ["192.168.42.117", "192.168.42.155", "192.168.42.5", "192.168.42.7", 
                 "192.168.42.135", "192.168.42.17", "192.168.42.3", "192.168.42.150"]

clients = [""]

index = 0
index_list = [1,2,3,8]

# Client_200 to PI4-5-6-7
for host in def_endpoints:
    index += 1
    if index in index_list:
        # Init AWSIoTMQTTClient
        myMQTTClient = AWSIoTMQTTClient("Client_200")

        # Disable metrics (sends AWS the type of SDK) and configure a onMessage function
        myMQTTClient.disableMetricsCollection()

        #Config
        myMQTTClient.configureEndpoint(host, 8883)
        myMQTTClient.configureCredentials("Certificates/Group"+str(index)+".pem", 
            "Certificates/Client_200privateKey.pem.key", "Certificates/Client_200certificate.pem.crt")

        # Connect and subscribe to AWS IoT
        myMQTTClient.connect()

        print ("Client_200 connected at" + host, flush=True)

        myMQTTClient.subscribe("Testing/#", 0, customOnMessage)

        print ("Client_200 subscribed to Testing/#", flush=True)

        clients.append(myMQTTClient)

while True:
    try:
        time.sleep(.1)
    except KeyboardInterrupt:
        clients.remove("")
        [y.disconnect() for y in clients]
        sys.exit()
