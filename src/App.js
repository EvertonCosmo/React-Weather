import React, { useState, Fragment } from "react";
import "./index.css";
import { dateBuilder, apiKey } from "./helpers";
import api from "./services/api";
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      api
        .get(`weather?q=${query}&units=metric&APPID=${apiKey}`)
        .then(result => {
          setWeather(result.data);
          setQuery("");
          console.log(result);
        });
    }
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search... "
            onChange={event => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {typeof weather.main != "undefined" && (
          <Fragment>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())} </div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </Fragment>
        )}
      </main>
    </div>
  );
}
export default App;
