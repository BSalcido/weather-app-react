import React from "react";
import "./Temperature.css";

function Temperature(props) {
  function handleUnitChange(event) {
    event.preventDefault();
    props.toggleUnits();
  }

  let currentUnit;
  if (props.units === "metric") {
    currentUnit = (
      <span className="temperature__units ps-1">
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
