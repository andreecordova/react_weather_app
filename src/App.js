//React
import React, { useState } from "react";

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//Components
import WeatherInformation from './components/WeatherInformation.jsx';

//Variables
import api from "./variables/api";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Own Styles
import "./scss/main.scss";

function App() {
  let [query, setQuery] = useState("");
  let [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=es`)
      .then((response) => response.json())
      .then((response) => {
        setWeather(response);
        setQuery("");
      });
    }
  };

  return (
    <div className="weather_container">
      <div className="title_container">
        <h1 className="title">React Weather App</h1>
      </div>

      <div className="input_container">       
        <input 
          type="text" 
          className="input_field"
          aria-label="Weather search" 
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search} 
        />
        <div className="icon_content">
          <FontAwesomeIcon icon={faSearch} />
        </div> 
      </div>
      
      { weather.main ? <WeatherInformation info={weather} /> : null }
    </div>
  );
}

export default App;
