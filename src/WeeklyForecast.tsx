import React, { useState, useEffect } from "react";
import "./WeeklyForecast.css";
import axios from "axios";
import { ForecastData, WeeklyForecastResponse, Coordinates } from "./types";

import DayForecast from "./DayForecast";

type Props = { units: string; coordinates: Coordinates };

const WeeklyForecast = ({ units, coordinates }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState<ForecastData[] | null>(null);
  const unit = units;

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  const lat = coordinates.lat;
  const lon = coordinates.lon;

  function showWeeklyForecast(response: WeeklyForecastResponse) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function callWeeklyForecastApi() {
    const key = "563dcfe0fb8bae48dd42b4a13d5480f2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${unit}`;
    axios.get(apiUrl).then(showWeeklyForecast);
  }

  if (loaded && forecast) {
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
};

export default WeeklyForecast;
