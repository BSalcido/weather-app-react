export type ForecastData = {
  dt: number;
  temp: { max: number; min: number };
  weather: Weather[];
};

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
