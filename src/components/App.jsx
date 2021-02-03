//React
import React, { useState } from "react";

//Components
import WeatherInformation from './WeatherInformation';
import SearchBox from './SearchBox';

// Own Styles
import "../scss/main.scss";

function App() {
  let [query, setQuery] = useState("");
  let [weather, setWeather] = useState({});

  return (
    <div className="weather_container">
      <div className="title_container">
        <h1 className="title">React Weather App</h1>
      </div>

      <div className="input_container">
        <SearchBox query={query} setQuery={setQuery} setWeather={setWeather} />
      </div>
      
      { weather.main ? <WeatherInformation info={weather} /> : null }
    </div>
  );
}

export default App;
