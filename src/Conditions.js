import React from "react";
import "./Conditions.css";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import OtherConditions from "./OtherConditions";
import WeatherIcon from "./WeatherIcon";
import WeeklyForecast from "./WeeklyForecast";

function Conditions(props) {
  if (props.weather === null) {
    return null;
  } else {
    return (
      <div className="Conditions">
        <div className="row">
          <div className="col">
            <div className="d-inline-flex">
              <WeatherIcon code={props.weather.icon} />
            </div>
            <div className="d-inline-flex">
              <Temperature
                temperature={props.weather.temperature}
                units={props.units}
                toggleUnits={props.toggleUnits}
              />
            </div>
            <OtherConditions
              humidity={props.weather.humidity}
              wind={props.weather.wind}
              feels_like={props.weather.feels_like}
              units={props.units}
            />
          </div>
          <div className="col text-end">
            <h1 className="conditions__city">{props.weather.city}</h1>

            <div className="conditions__description text-capitalize">
              {props.weather.description}
            </div>

            <FormattedDate timeStamp={props.weather.date} />
          </div>
        </div>
        <WeeklyForecast coordinates={props.weather.coordinates} />
      </div>
    );
  }
}

export default Conditions;
