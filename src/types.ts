export type Coordinates = { lat: string; lon: string };

export type WeeklyForecastResponse = {
  data: {
    daily: ForecastData[];
  };
};

export type Weather = {
  icon: string;
  temperature: number;
  humidity: number;
  wind: number;
  feels_like: number;
  city: string;
  description: string;
  date: number;
  coordinates: Coordinates;
};

// Current Weather API response
export type WeatherResponse = { icon: string; description: string };

export type Data = {
  name: string;
  weather: WeatherResponse[];
  dt: number;
  main: { temp: number; feels_like: number; humidity: number };
  wind: { speed: number };
  coord: Coordinates;
};

export type TemperatureResponse = { data: Data };

// Weekly Forecast API response
export type ForecastData = {
  dt: number;
  temp: { max: number; min: number };
  weather: Weather[];
};
