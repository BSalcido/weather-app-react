import React from "react";

function OtherConditions(props) {
  return (
    <div className="other-conditions">
      <div className="humidity">Humidity: {props.humidity}%</div>
      <div className="wind">Wind: {props.wind} m/s</div>
    </div>
  );
}
export default OtherConditions;
