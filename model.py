from pymongo import MongoClient

def connectToDB():
    client = MongoClient('mongodb+srv://haris:9626602@appcluster-kmcfd.mongodb.net/portfolio_database', username='haris', password='9626602', authSource='portfolio_database',  authMechanism='SCRAM-SHA-1') #Connects to the Mongo App
    print(client)
    
    db = client.portfolio_database #database name
    print(db)


    return db