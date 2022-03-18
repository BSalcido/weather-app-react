import React from "react";
import "./Temperature.css";

function Temperature(props) {
  // console.log(`units in Temperature: ${props.units}`);

  function handleUnitChange(event) {
    event.preventDefault();
    console.log(`units in handleUnitChange: ${props.units}`);
    props.toggleUnits();
  }

  let currentUnit;
  if (props.units === "metric") {
    currentUnit = (
      <span className="temperature__units ps-2">
        °C |
        <a href="/" onClick={handleUnitChange} className="temperature__link">
          °F
        </a>
      </span>
    );
  } else {
    currentUnit = (
      <span className="temperature__units ps-2">
        <a href="/" onClick={handleUnitChange} className="temperature__link">
          °C
        </a>
        | °F
      </span>
    );
  }

  return (
    <div className="temperature">
      <span className="temperature__degrees">{props.temperature}</span>
      {currentUnit}
    </div>
  );
}

export default Temperature;
