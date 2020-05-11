from pymongo import MongoClient
import os

MONGO_CONNECT_URL = os.environ['MONGO_CONNECT_URL']

def connectToDB():
    #Connects to the Mongo App
    client = MongoClient(MONGO_CONNECT_URL)
    print(client)
    
    #Database name
    db = client.Portfolio
    print(db)
    
    return db