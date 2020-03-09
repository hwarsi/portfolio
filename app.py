#!/usr/bin/env python3
import json, requests, traceback
import pymongo
from flask import Flask, render_template, jsonify, request, url_for
from flask_wtf import FlaskForm
from wtforms import SelectField, SubmitField
from model import connectToDB


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
    try:
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
    except Exception as e:
        print(e)
        print(traceback.format_exc())
        return jsonify('Failed!')

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
    temperatures = []
    winds = []
    rains = []
    icons = []
    for i in range(0,7):
        weekly_temperature = json_object['daily']['data'][i]['apparentTemperatureHigh']
        weekly_wind = json_object['daily']['data'][i]['windSpeed']
        weekly_rain = 100 * (json_object['daily']['data'][i]['precipProbability'])
        weekly_icon = json_object['daily']['data'][i]['icon']
        temperatures.append(weekly_temperature)
        winds.append(weekly_wind)
        rains.append(weekly_rain)
        icons.append(weekly_icon)
    print(temperatures[0])
    wind = {'winds':winds}
    temperature = {'temperatures':temperatures}
    rain = {"rains":rains}
    icon = {"icons":icons}
    rain_img = url_for('static', filename='img/rain.png')
    sun_img = url_for('static', filename='img/sun.png')
    cloudy_img = url_for('static', filename='img/partly.png')
    print(temperature)
    day_img = 1
    print(icon)
    
    if icon['icons'][6] == "rain":
        day7_img = rain_img 
    if icon['icons'][6] == "clear-day":
        day7_img = sun_img
    if icon['icons'][6] == "cloudy":
        day7_img = cloudy_img
    if icon['icons'][6] == "partly-cloudy-day":
        day7_img = cloudy_img
    
    if icon['icons'][5] == "rain":
        day6_img = rain_img 
    if icon['icons'][5] == "clear-day":
        day6_img = sun_img
    if icon['icons'][5] == "cloudy":
        day6_img = cloudy_img
    if icon['icons'][5] == "partly-cloudy-day":
        day6_img = cloudy_img
    
    if icon['icons'][4] == "rain":
        day5_img = rain_img 
    if icon['icons'][4] == "clear-day":
        day5_img = sun_img
    if icon['icons'][4] == "cloudy":
        day5_img = cloudy_img
    if icon['icons'][4] == "partly-cloudy-day":
        day5_img = cloudy_img

    if icon['icons'][3] == "rain":
        day4_img = rain_img 
    if icon['icons'][3] == "clear-day":
        day4_img = sun_img
    if icon['icons'][3] == "cloudy":
        day4_img = cloudy_img
    if icon['icons'][3] == "partly-cloudy-day":
        day4_img = cloudy_img
    
    if icon['icons'][2] == "rain":
        day3_img = rain_img 
    if icon['icons'][2] == "clear-day":
        day3_img = sun_img
    if icon['icons'][2] == "cloudy":
        day3_img = cloudy_img
    if icon['icons'][2] == "partly-cloudy-day":
        day3_img = cloudy_img
    
    if icon['icons'][1] == "rain":
        day2_img = rain_img 
    if icon['icons'][1] == "clear-day":
        day2_img = sun_img
    if icon['icons'][1] == "cloudy":
        day2_img = cloudy_img
    if icon['icons'][1] == "partly-cloudy-day":
        day2_img = cloudy_img
    
    if icon['icons'][0] == "rain":
        day1_img = rain_img 
    if icon['icons'][0] == "clear-day":
        day1_img = sun_img
    if icon['icons'][0] == "cloudy":
        day1_img = cloudy_img
    if icon['icons'][0] == "partly-cloudy-day":
        day1_img = cloudy_img

    return render_template('dashboard.html', temperature=temperature, wind=wind,rain=rain,icon=icon,rain_img=rain_img,sun_img=sun_img,cloudy_img=cloudy_img,day1_img=day1_img,day2_img=day2_img,day3_img=day3_img,day4_img=day4_img,day5_img=day5_img,day6_img=day6_img,day7_img=day7_img)


@portfolio_app.route('/complex', methods=['GET'])
def complexfeature():
    db = connectToDB()
    get_jobs = db.remote_jobs
    job = get_jobs.find()
    print(job)
    counter = db.remote_jobs.count()
    print(counter)
    return render_template('complexfeature.html', job=job, counter=counter)
    
'''for key in position:
        print(key)
    for key in company:
        print(key)'''

@portfolio_app.route('/addJob', methods=['POST'])
def addJob():
    try:
       
        ajax_data = request.get_json()
        print(request.get_json())

        db = connectToDB()

        collection_remote_jobs = db.remote_jobs
        print(collection_remote_jobs)

        collection_remote_jobs.insert_one(ajax_data)

        return jsonify('Success it worked')
    except Exception as e:
        print(e)
        print(traceback.format_exc())
        return jsonify('Failed!')

@portfolio_app.route('/deleteJob', methods=['POST'])
def deleteJob():
    try:
       
        ajax_data = request.get_json()
        print(request.get_json())

        db = connectToDB()

        collection_remote_jobs = db.remote_jobs
        print(collection_remote_jobs)

        collection_remote_jobs.delete_one(ajax_data)

        return jsonify('Success it worked')
    except Exception as e:
        print(e)
        print(traceback.format_exc())
        return jsonify('Failed!')

@portfolio_app.route('/editJob', methods=['POST'])
def editJob():
    try:
        ajax_data = request.get_json()
        jobs = {}
        jobs.update(ajax_data)

        db = connectToDB()
       

        collection_remote_jobs = db.remote_jobs
        print(collection_remote_jobs)
        

        collection_remote_jobs.update_one(
    oldjobs,
    {"$set":
    jobs 
    })

        return jsonify('Success it worked')
    except Exception as e:
        print(e)
        print(traceback.format_exc())
        return jsonify('Failed!')

if __name__ == "__main__":
    portfolio_app.run(debug=True)
