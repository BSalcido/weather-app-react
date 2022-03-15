import React, { useState } from "react";
import Conditions from "./Conditions";
import axios from "axios";

function Weather() {
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState({ ready: false });
  const [units, setUnits] = useState("metric");

  function showTemperature(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: response.data.dt,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    console.log(response.data);
  }

  function callApi(city) {
    const key = "782c11d8eafac460882fd8ac43f6aacd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;
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
              <input
                className="btn btn-secondary"
                type="submit"
                value="Search"
              />
            </div>{" "}
          </div>
        </form>
        <Conditions weather={weather} />
      </div>
    );
  } else {
    callApi("Paris");
    return "Loading...";
  }
}

export default Weather;
