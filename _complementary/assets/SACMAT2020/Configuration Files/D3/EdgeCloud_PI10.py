import time, argparse, sys
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient

def customOnMessage(client, userdata, message):
    rec_time = int(round(time.time() * 1000))
    print(str(rec_time) + " : " + message.topic, flush=True)

# Client_200 to AWS IoT
myMQTTClient = AWSIoTMQTTClient("Client_200")
myMQTTClient.disableMetricsCollection()

myMQTTClient.configureEndpoint("xyz-ats.iot.us-west-2.amazonaws.com", 8883)
myMQTTClient.configureCredentials("Certificates/AmazonRootCA1.pem",
        "Certificates/Client_200privateKey.pem.key", "Certificates/Client_200certificate.pem.crt")
        
myMQTTClient.connect()

print ("Client_200 connected to AWS IoT", flush=True)

myMQTTClient.subscribe("Testing/#", 1, customOnMessage)

print ("Client_200 subscribed to Testing/#", flush=True)

clients.append(myMQTTClient)

while True:
    try:
        time.sleep(.1)
    except KeyboardInterrupt:
        myMQTTClient.disconnect()
        sys.exit()

