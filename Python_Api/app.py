import json, requests, traceback
from flask import Flask, jsonify, request
from flask_cors import CORS
import pymongo
from model import connectToDB



app = Flask(__name__)
CORS(app)


@app.route("/weather",  methods=['GET', 'POST']) 
def weather():
    
    response = requests.get("http://api.openweathermap.org/data/2.5/onecall?lat=34.812111&lon=-82.242523&appid=09257db0a55a944ca688fd7e30f46bff")

    json_object = response.json()
    print(json_object)

    return json_object


app.config['SECRET_KEY'] = 'thisisthesecretkey'


@app.route("/contact",  methods=['POST']) 
def saveContact():
     db = connectToDB()
     data = request.get_json()
     
     print(data)
     commentCollection = db.Contact
     commentCollection.insert_one(data)
     
     return jsonify('Saved Data!')


if __name__ == "__main__":
    app.run(debug=True)

