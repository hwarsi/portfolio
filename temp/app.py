from flask import Flask, render_template, request
import requests
from flask_wtf import FlaskForm
from wtforms import SelectField, SubmitField, Description


app = Flask(__name__)
app.config['SECRET_KEY'] = 'Thisisasecret!'


"""
@app.route('/news', methods=['POST'])
def news():
    nation = request.form['country']
    print(nation)
    response = requests.get('https://newsapi.org/v2/top-headlines?country='+nation+'&apiKey=1d72bd9f54c147b09615f1cc2fd6ddc8') 
    json_object = response.json()
    #newsSource = json_object['articles'][0]['author']
    for i in range(0,9):
        newsSource = json_object['articles'][i]['author']
        info = json_object['articles'][i]['content']
        print(newsSource,
        info)
    #for i in range(0,9):
        #info = json_object['articles'][i]['content']
        #print(info)
    return render_template('news.html', source=newsSource,info=info)
    #return json_object
class News_Form(FlaskForm):
    country_field = SelectField('country', choices=[('select','Select Country'),('AU','Australia'),('US','United States')])
    Button = submitBtn()
@app.route('/')
def index():
    newsForm = Country()
    return render_template('index.html', form=newsForm)
"""
class News_Form(FlaskForm):
    countryfield = SelectField('country', choices=[('select','Select Country'),('AU','Australia'),('US','United States')])
    submitBtn = SubmitField('Submit')

class News_API(FlaskForm):
    nation = request.form['country']
    response = requests.get('https://newsapi.org/v2/top-headlines?country='+nation+'&apiKey=1d72bd9f54c147b09615f1cc2fd6ddc8') 
    json_object = response.json()
    for i in range(0,9):
        newsSource = description(json_object['articles'][i]['author'])
        info = description(json_object['articles'][i]['content'])

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        newsform = News_Form()
        return render_template('index.html', form=newsform)
    if request.method == 'POST':
        api_info = News_API()
        '''nation = request.form['country']
        print(nation)
        response = requests.get('https://newsapi.org/v2/top-headlines?country='+nation+'&apiKey=1d72bd9f54c147b09615f1cc2fd6ddc8') 
        json_object = response.json()
        for i in range(0,9):
            newsSource = json_object['articles'][i]['author']
            info = json_object['articles'][i]['content']
            print(newsSource,info)'''
    return render_template('news.html', form=api_info)



if __name__ == "___main___":
    app.run()