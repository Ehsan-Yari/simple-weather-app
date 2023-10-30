import instance from "../api/wather.js";
import { useEffect, useState } from "react";

const Weather = ({ position }) => {
  const [data, setData] = useState([]);
  const getWeather = async () => {
    const response = await instance.get("/forecast.json", {
      params: {
        q: `${position.lat},${position.long}`,
        days: 3,
      },
    });
    setData(response?.data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center pt-20 px-6">
      <h1 className="font-semibold text-4xl">
        {data?.location?.name} , {data?.location?.country}
      </h1>
      <h2 className="text-gray-400 text-xl mt-2">
        Chance of rain:
        <span className="ml-1">{data?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain}%</span>
      </h2>
      <img
        className="w-36 h-36 mt-10"
        src={data?.current?.condition?.icon}
        alt="image"
      />
      <p className="font-bold text-6xl mt-4 after:content-['°'] relative after:absolute">
        {data?.current?.temp_c}
      </p>
    </main>
  );
};

export default Weather;
