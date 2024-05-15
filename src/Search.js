import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
    let [city, setCity] = useState(null);
    let [result, setResult] = useState(null);
    let [weather, setWeather] = useState(null);
  
    function displayTemp(response) {
      setResult(true);
      setWeather({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        Description: response.data.weather[0].description,
      });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayTemp);
      }

      function updateCity(event) {
        setCity(event.target.value);
      }

      let form = (
        <div clasName="search-form">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            className="search-form-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form></div>
      );
    
      if (result) {
        return (
           <div> 
            {" "}
            {form}
           <div  className="weather-app-data">
              <div>
                <h1 classNamme="weather-app-city">{city}</h1>
                <p className="weather-app-detail">
                Description: <strong>{weather.description}</strong>
                  <br />
                  Humidity: <strong>{weather.humidity}%</strong>, Wind:
                  <strong> {Math.round(weather.wind)} mph</strong>
                </p>
              </div>
              <div className="weather-app-temperature-container">
                <span> <img src={weather.icon} alt={weather.description} /> </span>
                <span className="weather-app-temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="weather-app-unit">°C</span>
              </div>
            </div>
          </div>
        );
      } else {
        return form;
      }
    }
