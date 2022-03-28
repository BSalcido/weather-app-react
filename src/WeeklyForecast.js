import React, { useState } from "react";
import "./WeeklyForecast.css";
import axios from "axios";

import DayForecast from "./DayForecast";

function WeeklyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  const lat = props.coordinates.lat;
  const lon = props.coordinates.lon;
  function showWeeklyForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
  }

  function callWeeklyForecastApi() {
    const key = "563dcfe0fb8bae48dd42b4a13d5480f2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(showWeeklyForecast);
    console.log(apiUrl);
  }

  if (loaded) {
    return (
      <div className="weeklyForecast text-center">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <DayForecast forecastData={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    callWeeklyForecastApi();
    return null;
  }
}

export default WeeklyForecast;
