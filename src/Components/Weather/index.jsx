import axios from "axios";
import { useState } from "react";
import {
  BsFillCloudsFill,
  BsCloudHazeFill,
  BsClouds,
  BsFillCloudSnowFill,
} from "react-icons/bs";
import { IoThunderstormSharp, IoRainySharp } from "react-icons/io5";
import Loader from "../Loader";

export default function Weather() {
  const [weatherData, setWeatherData] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  function fetchApi() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=a63170d53047add4fe24c91c1d00c896&units=metric`;
    setLoader(true);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setWeatherData(response.data);
        setLoader(false);
        setError("");
        setInputValue("");
      })
      .catch((error) => {
        setLoader(true);
        console.log(error);
        setLoader(false);
        if (error.response && error.response.status === 404) {
          setError("City not found");
        } else {
          setError("An error occurred. Please try again later.");
        }
        setWeatherData("");
        setInputValue("");
      });
  }

  function handleSearch() {
    fetchApi();
  }

  function getWeatherIcon(weatherCondition) {
    switch (weatherCondition) {
      case "Clouds":
        return <BsFillCloudsFill className="text-sky-500" />;
      case "Clear":
        return <BsClouds className="text-sky-500" />;
      case "Rain":
        return <IoRainySharp className="text-sky-500" />;
      case "Snow":
        return <BsFillCloudSnowFill className="text-sky-500" />;
      case "Haze":
        return <BsCloudHazeFill className="text-sky-500" />;
      case "Thunderstorm":
        return <IoThunderstormSharp className="text-sky-500" />;
      case "Smoke":
        return <BsFillCloudsFill className="text-sky-500" />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className=" flex flex-col justify-center items-center pb-2 m-[80px] md:mt-[40px] ">
        <h1 className="text-3xl font-bold mb-6">Weather App</h1>
        <div className="bg-[#fdecba] p-[20px] md:p-8 rounded-lg text-center  border-2 border-gray-400">
          <div className="  flex-col md:flex-row gap-3 p-[17px] md:p-[34px]  flex items-center justify-center  space-x-4">
            <input
              className="  border py-2 px-4 rounded-lg w-[290px] md:w-[390px] "
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a city or country"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md  hover:bg-blue-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {loader && <Loader />}
          <div>
            {error && <p>{error}</p>}

            {!loader && weatherData && (
              <>
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-3xl">{weatherData.name}</h1>
                  <p className="text-[120px]">
                    {weatherData.weather &&
                      getWeatherIcon(weatherData.weather[0].main)}
                  </p>
                  <h3 className="text-2xl">{weatherData.main.temp}°C</h3>
                  <h5 className="text-2xl">
                    {weatherData.weather[0].description
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h5>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
