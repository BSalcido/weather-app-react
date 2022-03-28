import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DayForecast.css";

function DayForecast(props) {
  let dateStamp = new Date(props.forecastData.dt * 1000);

  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = weekDays[dateStamp.getDay()];

  let maxTemperature = Math.round(props.forecastData.temp.max);
  let minTemperature = Math.round(props.forecastData.temp.min);

  return (
    <div className="dayForecast">
      <div className="dayForecast__day">{day}</div>
      <WeatherIcon code={props.forecastData.weather[0].icon} size={36} />
      <div className="dayForecast__temperature">
        <span className="dayForecast__max">{maxTemperature}°</span>
        <span className="dayForecast__min">{minTemperature}°</span>
      </div>
    </div>
  );
}

export default DayForecast;
