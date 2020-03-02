#!/usr/bin/env python3
import json, requests, traceback
import pymongo
from flask import Flask, render_template, jsonify, request, url_for
from flask_wtf import FlaskForm
from wtforms import SelectField, SubmitField
from model import connectToDB, connectToDB_2
from complex_feature import job

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
    print(json_object)
    print(day1_rain)
    rain_img = url_for('static', filename='img/rain.png')
    sun_img = url_for('static', filename='img/sun.png')
    cloudy_img = url_for('static', filename='img/partly.png')
    
    if day7_icon == "rain":
        day7_img = rain_img 
    if day7_icon == "clear-day":
        day7_img = sun_img
    if day7_icon == "cloudy":
        day7_img = cloudy_img
    
    if day6_icon == "rain":
        day6_img = rain_img
    if day6_icon == "clear-day":
        day6_img = sun_img
    if day6_icon == "cloudy":
        day6_img = cloudy_img
    
    if day5_icon == "rain":
        day5_img = rain_img
    if day5_icon == "clear-day":
        day5_img = sun_img
    if day5_icon == "cloudy":
        day5_img = cloudy_img
    
    if day4_icon == "rain":
        day4_img = rain_img
    if day4_icon == "clear-day":
        day4_img = sun_img
    if day4_icon == "cloudy":
        day4_img = cloudy_img
    
    if day3_icon == "rain":
        day3_img = rain_img
    if day3_icon == "clear-day":
        day3_img = sun_img
    if day3_icon == "cloudy":
        day3_img = cloudy_img
    
    if day2_icon == "rain":
        day2_img = rain_img
    if day2_icon == "clear-day":
        day2_img = sun_img
    if day2_icon == "cloudy":
        day2_img = cloudy_img
    
    if day1_icon == "rain":
        day1_img = rain_img
    if day1_icon == "clear-day":
        day1_img = sun_img
    if day1_icon == "cloudy":
        day1_img = cloudy_img

    temperature = {'day1_temperature':day1_temperature, 'day2_temperature':day2_temperature, 'day3_temperature':day3_temperature, 'day4_temperature':day4_temperature, 'day5_temperature':day5_temperature, 'day6_temperature':day6_temperature, 'day7_temperature':day7_temperature}
    wind = {'day1_wind':day1_wind, 'day2_wind':day2_wind, 'day3_wind':day3_wind, 'day4_wind':day4_wind, 'day5_wind':day5_wind, 'day6_wind':day6_wind, 'day7_wind':day7_wind}
    rain = {'day1_rain':day1_rain, 'day2_rain':day2_rain, 'day3_rain':day3_rain, 'day4_rain':day4_rain, 'day5_rain':day5_rain, 'day6_rain':day6_rain, 'day7_rain':day7_rain} 
    icon = {'day1_icon':day1_icon, 'day2_icon':day2_icon, 'day3_icon':day3_icon, 'day4_icon':day4_icon, 'day5_icon':day5_icon, 'day6_icon':day6_icon, 'day7_icon':day7_icon}                     
    return render_template('dashboard.html', temperature=temperature, wind=wind, rain=rain, icon=icon, rain_img=rain_img, sun_img=sun_img, cloudy_img=cloudy_img, day7_img=day7_img, day6_img=day6_img, day5_img=day5_img, day4_img=day4_img, day3_img=day3_img, day2_img=day2_img, day1_img=day1_img)


@portfolio_app.route('/complex')
def complexfeature():
    
    job = [
    {
        'position': "Full Stack Engineer",
        "company": "HRG Search",
        "description": "The Full Stack Engineer will work with a small, fast-paced, agile software development team. This team is focused on developing and improving an enterprise cloud based suite of business critical applications. In this role, you will be working to improve existing (as well as develop new) architecture, product feature enhancements and general bug fixes. Individuals in this role will have the unique opportunity to drive the direction of the product for the organization."
    },

    {
        "position":'Full-Stack Engineer (JavaScript, React, Node, AWS)',
        "company":'Motion Recruitment',
        "description":'The AI and Data Software Development team of a globally recognized content and media company with a heavy software development arm is building the next-generation digital ad platform that provides a great reader experience while maximizing publisher revenue. As a member of this team, you will be building systems capable of powering the digital ad experience for some of the highest scale websites in the world. Demonstrated experience writing high quality, performant code is essential for this position.',
    },

    {
        "position":'Full Stack Developer',
        "company":'prestige staffing', 
        "description":'The Full-Stack Lead is a hands-on role with exclusive responsibility for owning module/service level design to delivery to key products. The role also involves in working with the product owner and architect to ensure compliance and overall security and quality standards of the company. Mentoring is also a key part of this role. Working on this high-volume, security intensive application, the Full-Stack Developer uses automation frameworks for testing and deployment. This individual will use their strong communication skills to work cross-functionally with teams in Atlanta and other locations, and has the ability to actively and effectively listen to hiring managers and candidates.',
    },

    {
        "position":'Lead Full-Stack Developer (JavaScript / AWS / Docker)',
        "company":'Flexion INC',
        "description":"Flexion is seeking a full-stack engineer to join an agile application development team tasked with modernizing a large-scale transactional system. The project work is primarily remote, but will require some client on-site work estimated at. We are looking for a full-stack engineer with strong application design and development skills. In this role, you must possess excellent problem-solving skills and deep technical knowledge with a strong aptitude for appreciating the focus, scope, and impact of your work in a much wider and forward-looking software landscape. You should also be able to demonstrate a history of technical leadership, excellent communication, and a positive attitude. As a remote employee in an organization adept at managing a remote workforce, individuals in these roles will have full responsibility for managing their time and work with a high degree of flexibility to enhance and improve the product",
    },

    {
        "position":"C# Software Engineer",
        "company":"Hazelcast",
        "description":"We’re far from the typical Silicon Valley story. Even though we’re headquartered in San Mateo, CA, our origins trace back to Turkey where we still have a large team presence. Nowadays, we’ve become a highly distributed family of 130+ employees across the globe. In a way, you can say we are proponents of Conway’s Law since our culture mirrors that of the distributed products we develop",
    },

    {
        "position":'Senior Software Engineer',
        "company":'Twitter',
        "description":'As a web engineer on the team, you’ll be working to ensure Twitter for Websites embeds are the best way for publishers to tell amazing stories using Twitter content on their websites, and to develop engaging user experiences for the millions of logged-out visitors who visit our progressive web app every day. Through your work, Twitter grows beyond a great consumer app to a company whose content powers experiences across the web.',
    },

    {
        "position":'Lead Software Engineer',
        "company":'School of Motion',
        "description":'As Lead Engineer at School of Motion you’ll be responsible for continuing to grow and scale our learning platform as we introduce more courses and content to more students, all over the world.',

    },

    {
        "position": 'Web Developer',
        "company": 'Ballotpedia',
        "description": 'Ballotpedia is seeking a full-time Web Developer to join our organization. Ballotpedia’s IT team supports the rest of the staff in making high-quality political data and unbiased encyclopedic content available to the American public by improving many aspects of Ballotpedia’s web presence and the behind-the-scenes tools used by staff. This is a full-stack role that may include various aspects of engineering, development, design, programming, architecture, testing, and tooling..',

    },

    {
        "position":'iOS Developer',
        "company": 'Flexjobs',
        "description": 'We are looking for an experienced iOS developer to join our team. This person will work with our product and development teams to build quality applications, fix bugs, maintain the code, and implement updates as needed.',

    },

    {
        "position": 'Senior Data Engineer',
        "company": 'Thorn',
        "description":'You have a commitment to putting the children we serve at the center of everything you do. You have proficient software development knowledge, with experience building, growing, maintaining a variety of products, and a love for creating elegant applications using modern technologies.',
    }
    ]
    counter=len(job)
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

        db = connectToDB_2()

        collection_remote_jobs = db.collection_remote_jobs
        print(collection_remote_jobs)

        collection_remote_jobs.insert_one(ajax_data)

        return jsonify('Success it worked')
    except Exception as e:
        print(e)
        print(traceback.format_exc())
        return jsonify('Failed!')

@portfolio_app.route('/getjob', methods=['GET'])
def GetJobData():
    response = requests.get('https://remoteok.io/api?ref=producthunt')
    json_object = response.json()
    length = len(json_object)
    print(length)

if __name__ == "__main__":
    portfolio_app.run(debug=True)
