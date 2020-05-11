from pymongo import MongoClient

def connectToDB():
    #Connects to the Mongo App
    #client = MongoClient('mongodb+srv://haris:eiantio1#@buttfuck-swj8l.gcp.mongodb.net/DevSpot?retryWrites=true&w=majority')
    client = MongoClient('mongodb://haris:eiantio1#@buttfuck-shard-00-00-swj8l.gcp.mongodb.net:27017,buttfuck-shard-00-01-swj8l.gcp.mongodb.net:27017,buttfuck-shard-00-02-swj8l.gcp.mongodb.net:27017/Portfolio?ssl=true&ssl_cert_reqs=CERT_NONE&replicaSet=ButtFuck-shard-0&authSource=admin&retryWrites=true&w=majority')
    print(client)
    
    #Database name
    db = client.Portfolio
    print(db)
    Print(db)
    

    return db