import React, { useState } from "react";
import Conditions from "./Conditions";
import axios from "axios";

function Weather() {
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setWeather({
      city: response.data.name,
      date: response.data.dt,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function callApi(city) {
    const key = "782c11d8eafac460882fd8ac43f6aacd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
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

  return (
    <div className="search-content">
      <form onSubmit={handleSubmit}>
        <div className="row p-4">
          <div className="col-10">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
              value={searchValue}
              onChange={searchCity}
            />
          </div>
          <div className="col-2">
            <input className="btn btn-secondary" type="submit" value="Search" />
          </div>{" "}
        </div>
      </form>
      <Conditions weather={weather} icon={icon} />
    </div>
  );
}

export default Weather;
