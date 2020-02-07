from pymongo import MongoClient

def connectToDB():
    client = MongoClient('localhost', 27017) #Connects to the Mongo App
    print(client)
    
    db = client.portfolio_database #database name
    print(db)

    return db