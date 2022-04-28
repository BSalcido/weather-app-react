import React from "react";
import "./OtherConditions.css";

type Props = {
  units: string;
  feels_like: string;
  humidity: string;
  wind: string;
};

const OtherConditions = ({ units, feels_like, humidity, wind }: Props) => {
  let currentUnit: string;

  if (units === "metric") {
    currentUnit = "m/s";
  } else {
    currentUnit = "mph";
  }
  return (
    <div className="other-conditions">
      <div className="other-conditions__feels-like">
        Feels like: {feels_like}°
      </div>
      <div className="other-conditions__humidity">Humidity: {humidity}%</div>
      <div className="other-conditions__wind">
        Wind: {wind} {currentUnit}
      </div>
    </div>
  );
};

export default OtherConditions;
