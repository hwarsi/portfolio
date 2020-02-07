from pymongo import MongoClient

client = MongoClient('localhost', 27017)
print(client)
db = client.portfolio_database #database name
print(db)
contact_data = db.contact_data #collection name
print(firstapp)

@app.route('/postcontactform', methods=['POST'])
def postcontactform():
    result = contact_data.insert_one(contact_form)
    print(result
