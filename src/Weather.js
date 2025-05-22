import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Harare</h1>
      <ul>
        <li>Thursday 12:17</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />{" "}
          6&deg;C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 35%</li>
            <li>Humidity: 20%</li>
            <li>Wind: 21km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
