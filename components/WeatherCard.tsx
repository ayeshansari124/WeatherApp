"use client";
import React from "react";

type WeatherData = {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number; feels_like?: number; humidity?: number };
};

interface Props {
  data: WeatherData;
}

export default function WeatherCard({ data }: Props) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 sm:p-6 rounded-xl shadow-inner text-center w-full mt-4 transition-all">
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
        {data.name}
      </h2>

      <div className="flex flex-col items-center">
        <img
          src={iconUrl}
          alt="Weather icon"
          className="w-20 h-20 sm:w-24 sm:h-24 mb-1"
        />
        <p className="capitalize text-gray-700 text-sm sm:text-base mb-1">
          {data.weather[0].description}
        </p>
        <p className="text-lg sm:text-xl font-semibold text-blue-800">
          🌡️ {data.main.temp}°C
        </p>
        {data.main.feels_like && (
          <p className="text-sm text-gray-600 mt-1">
            Feels like: {data.main.feels_like}°C
          </p>
        )}
        {data.main.humidity && (
          <p className="text-sm text-gray-600">Humidity: {data.main.humidity}%</p>
        )}
      </div>
    </div>
  );
}
