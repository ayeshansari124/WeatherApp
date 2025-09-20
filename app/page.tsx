"use client";
import { useState } from "react";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const apiKey = "0e628bd641b408f9bb831d9897518f0e";

  async function getWeather() {
    if (!city.trim()) {
      setError("Please enter your city name");
      setWeather(null);
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setWeather(null);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-blue-100 font-sans">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-black">Weather App</h1>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 text-base rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
        <button
          onClick={getWeather}
          className="w-full p-2 text-base rounded-lg bg-green-600 text-white hover:bg-green-700 transition duration-200"
        >
          Get Weather
        </button>

        <div className="mt-4 text-base text-black">
          {error && <p className="text-red-500">{error}</p>}
          {weather && <WeatherCard data={weather} />}
        </div>
      </div>
    </div>
  );
}
