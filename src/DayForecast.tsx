import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DayForecast.css";

type Weather = { icon: string };

type ForecastData = {
  dt: number;
  temp: { max: number; min: number };
  weather: Weather[];
};

type Props = { forecastData: ForecastData };

const DayForecast = ({ forecastData }: Props) => {
  let dateStamp = new Date(forecastData.dt * 1000);

  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = weekDays[dateStamp.getDay()];

  let maxTemperature = Math.round(forecastData.temp.max);
  let minTemperature = Math.round(forecastData.temp.min);

  return (
    <div className="dayForecast">
      <div className="dayForecast__day">{day}</div>
      <WeatherIcon code={forecastData.weather[0].icon} size={36} />
      <div className="dayForecast__temperature">
        <span className="dayForecast__max">{maxTemperature}°</span>
        <span className="dayForecast__min">{minTemperature}°</span>
      </div>
    </div>
  );
};

export default DayForecast;
