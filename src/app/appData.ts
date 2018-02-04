/**
 * All the interfaces used for forecast data is defined in this file
 */
export interface IWeatherDescription {
      id: number;
      main: string;
      description: string;
      icon?: string;
}

export interface IForecastData {
  coord: {
    lon: string;
    lat: string;
  };
  weather: Array<IWeatherDescription>;
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: string;
    sunset: string;
  };
  id: number;
  name: string;
  cod: number;
}