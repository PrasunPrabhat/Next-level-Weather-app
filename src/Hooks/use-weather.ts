import { useQuery } from "@tanstack/react-query";

import { weatherAPI } from "@/api/weather";
import type { CoordinatesTypes } from "@/api/types";

export const WEATHER_KEYS = {
  weather: (coords: CoordinatesTypes) => ["weather", coords] as const,
  forecast: (coords: CoordinatesTypes) => ["forecast", coords] as const,
  location: (coords: CoordinatesTypes) => ["location", coords] as const,
  search: (query: string) => ["location-search", query] as const,
} as const;

export function useWeatherQuery(coordinates: CoordinatesTypes | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.weather(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => weatherAPI.getCurrentWeather(coordinates!),
    enabled: !!coordinates,
  });
}

export function useForecastQuery(coordinates: CoordinatesTypes | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.forecast(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => weatherAPI.getForecast(coordinates!),
    enabled: !!coordinates,
  });
}

export function useReverseGeocodeQuery(coordinates: CoordinatesTypes | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.location(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => weatherAPI.reverseGeoCode(coordinates!),
    enabled: !!coordinates,
  });
}

export function useLocationSearch(query: string) {
  return useQuery({
    queryKey: WEATHER_KEYS.search(query),
    queryFn: () => weatherAPI.searchLocations(query!),
    enabled: query.length >= 3,
  });
}
