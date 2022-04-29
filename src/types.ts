export type Weather = { icon: string };

export type ForecastData = {
  dt: number;
  temp: { max: number; min: number };
  weather: Weather[];
};

export type WeeklyForecastResponse = {
  data: {
    daily: ForecastData[];
  };
};
