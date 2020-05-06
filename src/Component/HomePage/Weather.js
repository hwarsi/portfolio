import React, { Component } from "react";
import axios from "axios";
import { Table, Tag } from "antd";
import "./CSS/Weather.css";
import Item from "antd/lib/list/Item";

const { Column, ColumnGroup } = Table;

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: [],
      week: [],
      farenheight: <p>&#8457;</p>,
      key: [],
    };
  }

  componentWillMount() {
    let URL = "http://127.0.0.1:5000/weather";
    let HEADERS = {
      "Access-Control-Allow-Origin": "*",
      authorization: "sdjfjdskfj45j4ekj",
    };

    axios
      .get(URL, HEADERS)
      .then((response) => {
        let d = new Date();
        let currentDay = d.getDay();
        let weatherData = response.data;
        let weathers = this.state.weatherInfo;
        // console.log(weatherData);
        let weather = [];
        let week;
        console.log(currentDay);
        let day = currentDay;

        if (day === 1) {
          week = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ];
          this.setState({ week: week });
        }
        if (day === 2) {
          week = [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
          ];
          this.setState({ week: week });
        }
        if (day === 3) {
          week = [
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
          ];
          this.setState({ week: week });
        }
        if (day === 4) {
          week = [
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
          ];
          this.setState({ week: week });
        }
        if (day === 5) {
          week = [
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
          ];
          this.setState({ week: week });
        }
        if (day === 6) {
          week = [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ];
          this.setState({ week: week });
        }
        if (day === 0) {
          week = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          this.setState({ week: week });
        }

        for (let i = 0; i < week.length; i++) {
          let kelvin = weatherData["daily"][i]["temp"]["day"];
          let farenheight = ((kelvin - 273.15) / 5) * 9 + 32;
          let currentTemperature = Math.round(farenheight);
          let currentWeather =
            weatherData["daily"][i]["weather"][0]["description"];
          let mainWeather = weatherData["daily"][i]["weather"][0]["main"];
          let currentDay = week[i];
          let key = ["key1", "key2", "key3", "key4", "key5", "key6", "key7"];
          let currentKey = key[i];

          if (mainWeather === "Clear") {
            let icon = (
              <img src="http://openweathermap.org/img/wn/01d@2x.png"></img>
            );
            weather.push({
              key: currentKey,
              day: currentDay,
              temperature: currentTemperature,
              weather: currentWeather,
              main: mainWeather,
              icon: icon,
            });
          }

          if (mainWeather === "Clouds") {
            let icon = (
              <img src="http://openweathermap.org/img/wn/02d@2x.png"></img>
            );
            weather.push({
              key: currentKey,
              day: currentDay,
              temperature: currentTemperature,
              weather: currentWeather,
              main: mainWeather,
              icon: icon,
            });
          }
          if (mainWeather === "Rain") {
            let icon = (
              <img src="http://openweathermap.org/img/wn/09d@2x.png"></img>
            );
            weather.push({
              key: currentKey,
              day: currentDay,
              temperature: currentTemperature,
              weather: currentWeather,
              main: mainWeather,
              icon: icon,
            });
          }

          if (mainWeather === "Snow") {
            let icon = (
              <img src="http://openweathermap.org/img/wn/13d@2x.png"></img>
            );
            weather.push({
              key: currentKey,
              day: currentDay,
              temperature: currentTemperature,
              weather: currentWeather,
              main: mainWeather,
              icon: icon,
            });
          }
          if (mainWeather === "Mist") {
            let icon = (
              <img src="http://openweathermap.org/img/wn/50d@2x.png"></img>
            );
            weather.push({
              key: currentKey,
              day: currentDay,
              temperature: currentTemperature,
              weather: currentWeather,
              main: mainWeather,
              icon: icon,
            });
          }
        }

        this.setState({ weatherInfo: weather });
        console.log(this.state.week);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="weatherBackground">
        <h1 className="weatherTitle">Weather</h1>
        <h1 className="weatherLocatation">Greenville, SC</h1>
        <div className="widgetBackground">
          {this.state.weatherInfo.map((item) => (
            <div className={item.key} id="key">
              <div className="dayWeather">{item.day}</div>
              <div className="iconWeather">{item.icon}</div>
              <div className="temperature">{item.temperature} &#8457;</div>
              <div className="weatherDescription">{item.weather}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Weather;
