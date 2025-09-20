"use client";
import React from "react";

type WeatherData = {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number };
};

interface Props {
  data: WeatherData;
}

export default function WeatherCard({ data }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full max-w-md">
      <h2 className="text-xl font-bold mb-2">{data.name}</h2>
      <p className="capitalize">{data.weather[0].description}</p>
      <p className="text-lg">🌡️ {data.main.temp}°C</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather icon"
        className="mx-auto"
      />
    </div>
  );
}
