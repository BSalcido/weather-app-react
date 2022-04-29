import React, { useState } from "react";
import "./Weather.css";
import Conditions from "./Conditions";
import axios from "axios";
import { Weather as WeatherProps, TemperatureResponse } from "./types";

function Weather() {
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState<WeatherProps | null>(null);
  const [ready, setReady] = useState(false);
  const [units, setUnits] = useState("metric");

  const size = 50;

  function callApi(city: string, newUnits: string) {
    const key = "563dcfe0fb8bae48dd42b4a13d5480f2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${
      newUnits ? newUnits : units
    }`;
    axios.get(url).then(showTemperature);
  }

  function toggleUnits() {
    if (!weather) {
      return;
    }
    let newUnits = units === "metric" ? "imperial" : "metric";
    setUnits(newUnits);
    callApi(weather.city, newUnits);
  }

  function showTemperature(response: TemperatureResponse) {
    setWeather({
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
    setReady(true);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    callApi(searchValue, units);
    setSearchValue("");
  }

  function searchCity(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  if (ready && weather) {
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
        <Conditions
          weather={weather}
          units={units}
          toggleUnits={toggleUnits}
          size={size}
        />
      </div>
    );
  } else {
    callApi("Paris", units);
    return <div>"Loading..."</div>;
  }
}

export default Weather;
