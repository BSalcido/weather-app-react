import React, { useState } from "react";
import "./Weather.css";
import Conditions from "./Conditions";
import axios from "axios";

function Weather() {
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState({ ready: false });
  const [units, setUnits] = useState("metric");

  console.log(`units in Weather: ${units}`);

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
    });
    console.log(response.data);
  }

  function callApi(city, newUnits) {
    const key = "782c11d8eafac460882fd8ac43f6aacd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${
      newUnits ? newUnits : units
    }`;
    console.log(url);
    axios.get(url).then(showTemperature);
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
          <div className="row p-4">
            <div className="col-11">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
                value={searchValue}
                onChange={searchCity}
              />
            </div>
            <div className="col-1">
              <input
                className="btn btn-secondary"
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
