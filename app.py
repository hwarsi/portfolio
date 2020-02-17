#!/usr/bin/env python3

from flask import Flask, render_template, jsonify, request
import json
import pymongo
from model import connectToDB
import requests, traceback
from flask_wtf import FlaskForm
from wtforms import SelectField, SubmitField

portfolio_app = Flask(__name__)
portfolio_app.config['SECRET_KEY'] = 'Thisisasecret!'

@portfolio_app.route("/", methods=['GET'])
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

@portfolio_app.route('/postContactForm', methods=['POST'])
def postContactForm():
    #Gets the data sent from frontend  
    #ajax_data = json.load(request.get_json()) 
    ajax_data = request.get_json()
    print(request.get_json())

    # Connect to DB
    db = connectToDB()

    #Choose collection name
    contact_data = db.contact_data
    print(contact_data)

    #Inserts data into database
    contact_data.insert_one(ajax_data)

    #Returns data to ajax
    return jsonify('Success it worked')

"""
@portfolio_app.route('/postcontactform', methods=['POST'])
def postcontactform():
    print ('DATA IS HERE')
    print (request.data)
    frontend_data = request.data
    print (frontend_data)

    return jsonify('Success! Data has been processed!')
"""
# Defines your form
class News_Form(FlaskForm):
    countryfield = SelectField('country', choices=[('select','Select Country'),('AU','Australia'),('US','United States')])
    submitBtn = SubmitField('Submit')


# API call to get news info depending on nation
def news_api(nation):
    response = requests.get('https://newsapi.org/v2/top-headlines?country='+nation+'&apiKey=1d72bd9f54c147b09615f1cc2fd6ddc8') 
    json_object = response.json()

    newsData = []
    for i in range(0,9):
        authorData = json_object['articles'][i]['author']
        contentData = json_object['articles'][i]['content']
        print(authorData, contentData)

        #Only get the data I want
        currentData = {'author':authorData, 'content':contentData}

        # Add authors to a list
        newsData.append(currentData)

    return newsData

# Views route to display the form and get api information to display another page
@portfolio_app.route('/news', methods=['GET', 'POST'])
def news():
    if request.method == 'GET':
        newsform = News_Form()
        return render_template('index.html', form=newsform)

    if request.method == 'POST':
        try:
            nation = request.form['countryfield']
            #print(nation)
            api_info = news_api(nation)
            #print(api_info)
            return render_template('news.html', news_data=api_info)
        except Exception as e:
            #print(str(e))
            #print(traceback.format_exc())
            return jsonify(str(e))

@portfolio_app.route('/dashboard', methods=['GET'])
def weather_api():
    response = requests.get('https://api.darksky.net/forecast/83945a80a84576da8cbe39329a67d40c/34.8526,-82.3940')
    json_object = response.json()
    day1_temperature = json_object['daily']['data'][0]['apparentTemperatureHigh']
    day2_temperature = json_object['daily']['data'][1]['apparentTemperatureHigh']
    day3_temperature = json_object['daily']['data'][2]['apparentTemperatureHigh']
    day4_temperature = json_object['daily']['data'][3]['apparentTemperatureHigh']
    day5_temperature = json_object['daily']['data'][4]['apparentTemperatureHigh']
    day6_temperature = json_object['daily']['data'][5]['apparentTemperatureHigh']
    day7_temperature = json_object['daily']['data'][6]['apparentTemperatureHigh']
    day1_wind = json_object['daily']['data'][0]['windSpeed']
    day2_wind = json_object['daily']['data'][1]['windSpeed']
    day3_wind = json_object['daily']['data'][2]['windSpeed']
    day4_wind = json_object['daily']['data'][3]['windSpeed']
    day5_wind = json_object['daily']['data'][4]['windSpeed']
    day6_wind = json_object['daily']['data'][5]['windSpeed']
    day7_wind = json_object['daily']['data'][6]['windSpeed']
    day1_rain = 100 * (json_object['daily']['data'][0]['precipProbability'])
    day2_rain = 100 * (json_object['daily']['data'][1]['precipProbability'])
    day3_rain = 100 * (json_object['daily']['data'][2]['precipProbability'])
    day4_rain = 100 * (json_object['daily']['data'][3]['precipProbability'])
    day5_rain = 100 * (json_object['daily']['data'][4]['precipProbability'])
    day6_rain = 100 * (json_object['daily']['data'][5]['precipProbability'])
    day7_rain = 100 * (json_object['daily']['data'][6]['precipProbability'])
    day1_icon = json_object['daily']['data'][0]['icon']
    day2_icon = json_object['daily']['data'][1]['icon']
    day3_icon = json_object['daily']['data'][2]['icon']
    day4_icon = json_object['daily']['data'][3]['icon']
    day5_icon = json_object['daily']['data'][4]['icon']
    day6_icon = json_object['daily']['data'][5]['icon']
    day7_icon = json_object['daily']['data'][6]['icon']
    print(day1_rain)

    temperature = {'day1_temperature':day1_temperature, 'day2_temperature':day2_temperature, 'day3_temperature':day3_temperature, 'day4_temperature':day4_temperature, 'day5_temperature':day5_temperature, 'day6_temperature':day6_temperature, 'day7_temperature':day7_temperature}
    wind = {'day1_wind':day1_wind, 'day2_wind':day2_wind, 'day3_wind':day3_wind, 'day4_wind':day4_wind, 'day5_wind':day5_wind, 'day6_wind':day6_wind, 'day7_wind':day7_wind}
    rain = {'day1_rain':day1_rain, 'day2_rain':day2_rain, 'day3_rain':day3_rain, 'day4_rain':day4_rain, 'day5_rain':day5_rain, 'day6_rain':day6_rain, 'day7_rain':day7_rain} 
    icon = {'day1_icon':day1_icon, 'day2_icon':day2_icon, 'day3_icon':day3_icon, 'day4_icon':day4_icon, 'day5_icon':day5_icon, 'day6_icon':day6_icon, 'day7_icon':day7_icon}                     
    #print(json_object)
    return render_template('dashboard.html', temperature=temperature, wind=wind, rain=rain, icon=icon)



if __name__ == "__main__":
    portfolio_app.run(debug=True)
