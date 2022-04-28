import React from "react";
// @ts-ignore
import ReactAnimatedWeather from "react-animated-weather";

type Props = { code: string; size: number };

const WeatherIcon = ({ code, size }: Props) => {
  const iconsMapping: { [key: string]: string } = {
    "01n": "CLEAR_NIGHT",
    "01d": "CLEAR_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "03n": "CLOUDY",
    "03d": "CLOUDY",
    "04n": "CLOUDY",
    "04d": "CLOUDY",
    "09n": "RAIN",
    "09d": "RAIN",
    "10n": "SLEET",
    "10d": "SLEET",
    "11n": "RAIN",
    "11d": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50n": "FOG",
    "50d": "FOG",
  };

  return (
    <div className="weather-icon pe-2">
      <ReactAnimatedWeather
        icon={iconsMapping[code]}
        color={"#202124"}
        size={size}
        animate={true}
      />
    </div>
  );
};

export default WeatherIcon;
