import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import OtherConditions from "./OtherConditions";

function Conditions(props) {
  if (props.weather === null && props.icon === null) {
    return null;
  } else {
    return (
      <div className="Conditions">
        <div className="city">{props.weather.city}</div>
        <FormattedDate timeStamp={props.weather.date} />
        <img src={props.icon} alt="icon" />
        <div className="description text-capitalize">
          {props.weather.description}
        </div>
        <Temperature temperature={props.weather.temperature} />
        <OtherConditions
          humidity={props.weather.humidity}
          wind={props.weather.wind}
        />
      </div>
    );
  }
}

export default Conditions;
