from pymongo import MongoClient

def connectToDB():
    #Connects to the Mongo App
    client = MongoClient('mongodb://hwarsi:9626602hw@cluster0-shard-00-00-0fkzd.mongodb.net:27017,cluster0-shard-00-01-0fkzd.mongodb.net:27017,cluster0-shard-00-02-0fkzd.mongodb.net:27017/portfolio_database?ssl=true&ssl_cert_reqs=CERT_NONE&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
    print(client)
    
    #Database name
    db = client.portfolio_database
    print(db)
    

    return db


def connectToDB_2():
    #Connects to the Mongo App
    client = MongoClient('mongodb://hwarsi:9626602hw@cluster0-shard-00-00-0fkzd.mongodb.net:27017,cluster0-shard-00-01-0fkzd.mongodb.net:27017,cluster0-shard-00-02-0fkzd.mongodb.net:27017/portfolio_database?ssl=true&ssl_cert_reqs=CERT_NONE&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
    print(client)
    db = client.portfolio_database
    
    #Database name
    print(db)
    return db