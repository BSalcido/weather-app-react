import React from "react";

function Temperature(props) {
  return (
    <div className="temperatureToShow">
      <span className="degrees">{props.temperature}</span>
      <span className="units">°C</span>
    </div>
  );
}

export default Temperature;
