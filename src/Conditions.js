import React from "react";
import "./Conditions.css";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import OtherConditions from "./OtherConditions";
import WeatherIcon from "./WeatherIcon";

function Conditions(props) {
  if (props.weather === null) {
    return null;
  } else {
    return (
      <div className="Conditions">
        <div className="row">
          <div className="col">
            <h1 className="city">{props.weather.city}</h1>
          </div>
          <div className="col">
            {" "}
            <FormattedDate timeStamp={props.weather.date} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <WeatherIcon code={props.weather.icon} />
              </div>
              <div className="col">
                {" "}
                <Temperature temperature={props.weather.temperature} />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="description text-capitalize">
              {props.weather.description}
            </div>
            <OtherConditions
              humidity={props.weather.humidity}
              wind={props.weather.wind}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Conditions;
