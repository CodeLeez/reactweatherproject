import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

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
