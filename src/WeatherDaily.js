import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

import "./WeatherDaily.css";
import axios from "axios";

export default function WeatherDaily(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherDaily">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "89edb83e45300d77a9a1a3bef122681f";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
