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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-blue-100 p-6 font-sans">
      <div className="bg-white/90 backdrop-blur-lg w-full max-w-sm sm:max-w-md rounded-2xl shadow-lg p-6 sm:p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
          ☀️ Weather App
        </h1>

        {/* Input and button stack vertically on phones */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-2 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 w-full"
          />
          <button
            onClick={getWeather}
            className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 active:scale-95 transition w-full sm:w-auto"
          >
            Get Weather
          </button>
        </div>

        {/* Weather or error section */}
        <div className="text-base text-gray-800">
          {error && (
            <p className="text-red-500 bg-red-50 p-2 rounded-md text-sm mb-2">
              {error}
            </p>
          )}
          {weather && <WeatherCard data={weather} />}
        </div>
      </div>

      <footer className="mt-6 text-gray-700 text-sm opacity-75">
        Built with ❤️ by <span className="font-medium">Ayesha</span>
      </footer>
    </main>
  );
}
