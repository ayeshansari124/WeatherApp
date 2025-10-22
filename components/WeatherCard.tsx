import Image from "next/image";
import { WeatherData } from "../app/page";

type WeatherCardProps = {
  data: WeatherData;
};

export default function WeatherCard({ data }: WeatherCardProps) {
  const { name, main, weather } = data;
  const { temp, feels_like, humidity } = main;
  const { description, icon } = weather[0];

  return (
    <div className="bg-blue-50/80 p-4 rounded-xl shadow-md text-center mt-4">
      <h2 className="text-xl font-semibold text-blue-900">{name}</h2>

      <div className="flex flex-col items-center mt-2">
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          width={80}
          height={80}
        />
        <p className="text-lg text-blue-800 capitalize">{description}</p>
      </div>

      <div className="mt-3 text-blue-900">
        <p>🌡 Temperature: {temp}°C</p>
        <p>🤔 Feels like: {feels_like}°C</p>
        <p>💧 Humidity: {humidity}%</p>
      </div>
    </div>
  );
}
