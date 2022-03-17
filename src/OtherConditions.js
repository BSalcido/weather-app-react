import React from "react";
import "./OtherConditions.css";

function OtherConditions(props) {
  return (
    <div className="other-conditions">
      <div className="other-conditions__feels-like">
        Feels like: {props.feels_like}°
      </div>
      <div className="other-conditions__humidity">
        Humidity: {props.humidity}%
      </div>
      <div className="other-conditions__wind">Wind: {props.wind} m/s</div>
    </div>
  );
}
export default OtherConditions;
