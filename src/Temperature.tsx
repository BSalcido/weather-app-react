import React from "react";
import "./Temperature.css";

type Props = { units: string; temperature: number; toggleUnits(): void };

const Temperature = ({ units, temperature, toggleUnits }: Props) => {
  function handleUnitChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    toggleUnits();
  }

  let currentUnit;
  if (units === "metric") {
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
      <span className="temperature__degrees">{temperature}</span>
      {currentUnit}
    </div>
  );
};

export default Temperature;
