import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Geneva</h1>
      <ul>
        <li>Mon, 13 Dec 2022</li>
        <li>06:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Preciptation: 15%</li>
            <li>Humidity: 80%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>

      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
