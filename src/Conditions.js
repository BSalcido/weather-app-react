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
        <h1 className="conditions__city">{props.weather.city}</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-2">
            <div className="conditions__description text-capitalize">
              {props.weather.description}
            </div>
            <FormattedDate timeStamp={props.weather.date} />
          </div>

          <div className="col-7">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col">
                <div className="float-end">
                  <WeatherIcon code={props.weather.icon} />
                </div>
              </div>
              <div className="col">
                <div className="float-start">
                  <Temperature
                    temperature={props.weather.temperature}
                    units={props.units}
                    toggleUnits={props.toggleUnits}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <OtherConditions
              humidity={props.weather.humidity}
              wind={props.weather.wind}
              feels_like={props.weather.feels_like}
              units={props.units}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Conditions;
