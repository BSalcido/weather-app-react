import React, { useState } from "react";
import "./Weather.css";
import Conditions from "./Conditions";
import axios from "axios";

function Weather() {
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState({ ready: false });
  const [units, setUnits] = useState("metric");

  function callApi(city, newUnits) {
    const key = "563dcfe0fb8bae48dd42b4a13d5480f2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${
      newUnits ? newUnits : units
    }`;
    axios.get(url).then(showTemperature);
    console.log(url);
  }

  function toggleUnits() {
    let newUnits = units === "metric" ? "imperial" : "metric";
    setUnits(newUnits);
    callApi(weather.city, newUnits);
  }

  function showTemperature(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: response.data.dt,
      temperature: Math.round(response.data.main.temp),
      feels_like: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    callApi(searchValue);
    setSearchValue("");
  }

  function searchCity(event) {
    setSearchValue(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row py-4">
            <div className="col-10">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
                value={searchValue}
                onChange={searchCity}
              />
            </div>
            <div className="col-2 d-flex justify-content-center">
              <input
                className="weather__search-btn"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <Conditions weather={weather} units={units} toggleUnits={toggleUnits} />
      </div>
    );
  } else {
    callApi("Paris");
    return "Loading...";
  }
}

export default Weather;
