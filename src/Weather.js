import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
    }

    const apiKey = "ec8648d1df34ceeeb3c068934e0a6833";
    let city = "Toronto";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

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
            <h1>Toronto</h1>
            <ul>
                <li>Monday 07:00</li>
                <li>Rainy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                <img src="http://openweathermap.org/img/wn/09d@2x.png" 
                alt="Rainy"/>
                <span className="temperature">17</span>
                <span className="unit">°C</span>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Percipitation: 100%</li>
                        <li>Humidity: 80%</li>
                        <li>Wind: 13 km/h</li>
                    </ul>

                </div>
        </div>
        </div>
    )
}