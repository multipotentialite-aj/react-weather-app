import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    
    function handleResponse(response) {
        setWeatherData({
          ready: true,
          coordinates: response.data.coord,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
          city: response.data.name,
        });
      }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                    </div>
                </form>
                <h1 className="mb-2">{weatherData.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <div className="clearfix">
                            <div className="float-left">
                            <WeatherIcon code={weatherData.icon} size={52} />
                                    
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                    </div>
                    
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind}km/h</li>
                        </ul>
                    </div>
                    </div>
            </div>
            </div>
        );
    } else {
    const apiKey = "ec8648d1df34ceeeb3c068934e0a6833";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
}
}