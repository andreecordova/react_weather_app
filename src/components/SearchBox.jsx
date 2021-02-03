//React
import React from 'react';

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//Variables
import api from "../variables/api";

function SearchBox({ query, setQuery, setWeather }) {
	const change = (e) => {
		setQuery(e.target.value);
	};
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
		<div className="searchbox_content">
			<input 
				type="text" 
				className="input_field"
				aria-label="Weather search" 
				placeholder="Search..."
				onChange={change}
				value={query}
				onKeyPress={search} 
			/>
			<div className="icon_content">
				<FontAwesomeIcon icon={faSearch} />
			</div> 
		</div>
	)
}

export default SearchBox;
