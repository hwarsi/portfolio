from flask import Flask, render_template, jsonify, request
import json
from pymongo import MongoClient


client = MongoClient('localhost', 27017) #Connects to the Mongo App
print(client)
db = client.portfolio_database #database name
print(db)
contact_data = db.contact_data #collection name
print(contact_data)

app = Flask(__name__)

@app.route('/postcontactform', methods=['POST'])
def postcontactform():
    ajax_data = json.loads(request.data) #Gets the data sent from ajax   
    contact_data.insert_one(ajax_data) # Inserts data into database
    return jsonify({'Success it worked'}) #Returns data to ajax
    print(data)