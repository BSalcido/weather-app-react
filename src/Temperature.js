import React from "react";
import "./Temperature.css";

function Temperature(props) {
  return (
    <div className="temperature">
      <span className="temperature__degrees">{props.temperature}</span>
      <span className="temperature__units">°C</span>
    </div>
  );
}

export default Temperature;
