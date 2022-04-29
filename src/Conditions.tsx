import React from "react";
import "./Conditions.css";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import OtherConditions from "./OtherConditions";
import WeatherIcon from "./WeatherIcon";
import WeeklyForecast from "./WeeklyForecast";
import { Weather } from "./types";

type Props = {
  weather: Weather;
  units: string;
  toggleUnits(): void;
  size: number;
};

const Conditions = ({ weather, units, toggleUnits }: Props) => {
  if (weather === null) {
    return null;
  } else {
    return (
      <div className="Conditions">
        <div className="row">
          <div className="col">
            <div className="d-inline-flex">
              <WeatherIcon code={weather.icon} size={55} />
            </div>
            <div className="d-inline-flex">
              <Temperature
                temperature={weather.temperature}
                units={units}
                toggleUnits={toggleUnits}
              />
            </div>
            <OtherConditions
              humidity={weather.humidity}
              wind={weather.wind}
              feels_like={weather.feels_like}
              units={units}
            />
          </div>
          <div className="col text-end">
            <h1 className="conditions__city">{weather.city}</h1>

            <div className="conditions__description text-capitalize">
              {weather.description}
            </div>

            <FormattedDate timeStamp={weather.date} />
          </div>
        </div>
        <WeeklyForecast coordinates={weather.coordinates} units={units} />
      </div>
    );
  }
};

export default Conditions;
