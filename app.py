from flask import Flask, render_template, jsonify, request
import json, pymongo
from model import connectToDB

portfolio_app = Flask(__name__)

@portfolio_app.route("/home", methods=['GET'])
def homePage():
    myname = "Haris Warsi"

    return render_template("portfolio.html", name=myname)

@portfolio_app.route("/contact", methods=['GET'])
def ContactPage():
    myname = "Haris Warsi"

    return render_template("contact.html", name=myname)

@portfolio_app.route("/about", methods=['GET'])
def AboutPage():
    myname = "Haris Warsi"

    return render_template("about.html", name=myname)

@portfolio_app.route('/contactform', methods=['GET', 'POST'])
def contactform():
    if request.method == 'GET':
        print('You have reached the backend!!!')
    
        ContactData = [
            {   'Name': 'John',
                'Email': 'billybob@gmail.com',
            },

            {   'Name': 'Thomas',
                'Email': 'thomasbaslik@gmail.com',
            },
        ]

        print(ContactData)
        print('SENDING DATA TO FRONTEND...')

        return jsonify(ContactData)
    
    if request.method == 'POST':
        return jsonify('I didnt build post!')

@app.route('/postContactForm', methods=['POST'])
def postContactForm():
    #Gets the data sent from frontend  
    ajax_data = json.loads(request.data) 
    print(ajax_data)

    # Connect to DB
    db = connectToDB()

    #Choose collection name
    contact_data = db.contact_data
    print(contact_data)

    #Inserts data into database
    contact_data.insert_one(ajax_data)

    #Returns data to ajax
    return jsonify({'Success it worked'})

"""
@portfolio_app.route('/postcontactform', methods=['POST'])
def postcontactform():
    print ('DATA IS HERE')
    print (request.data)
    frontend_data = request.data
    print (frontend_data)

    return jsonify('Success! Data has been processed!')
"""

if __name__ == "___main___":
    portfolio_app.run()
