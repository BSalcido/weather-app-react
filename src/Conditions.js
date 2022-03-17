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
        <div className="row align-items-center">
          <div className="col-5">
            <h1 className="conditions__city">{props.weather.city}</h1>{" "}
            <div className="conditions__description text-capitalize">
              {props.weather.description}
            </div>
            <FormattedDate timeStamp={props.weather.date} />
          </div>

          <div className="col-4">
            <div className="row justify-content-center align-items-center">
              <div className="col">
                <div className="float-center">
                  <WeatherIcon code={props.weather.icon} />
                </div>
              </div>
              <div className="col">
                <div>
                  <Temperature temperature={props.weather.temperature} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <OtherConditions
              humidity={props.weather.humidity}
              wind={props.weather.wind}
              feels_like={props.weather.feels_like}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Conditions;
