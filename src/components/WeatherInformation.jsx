
import React from 'react';
import PropTypes from 'prop-types';

//Functions
import setBackground from '../functions/setBackground';
import dateBuild from '../functions/dateBuild';

function WeatherInformation({ info }) {
	const { name, main, weather, timezone } = info;
	const name_contry = `${name}`;
	const temperature = `${Math.round(main.temp)}°C`;
	const temperature_range = `${main.temp_min}°C / ${main.temp_max}°C`;
	const humidity = `Humedad: ${main.humidity}%`;
	const weather_conditions = `${weather[0].main}`;
	const weather_img = <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather_conditions} />
	const today = new Date();
	const localTime = today.getTime();
	const localOffset = today.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	const locate = utc + (1000 * timezone);
	const date = new Date(locate);
	const { date_format, time_format } = dateBuild(date);
	const container_class_name = setBackground(date);

	return(
		<div className={container_class_name}>
			<div className="location_container">
				<div className="location">{ name_contry }</div>
				<div className="humidity">{ humidity }</div>
				<div className="date">{ date_format }</div>
				<div className="time">{ time_format }</div>
			</div>
			<div className="weather_container">
				<div className="temperature">{ temperature }</div>
				<div className="weather">
					{ weather_conditions }
					{ weather_img }
				</div>
				<div className="temperature_range">{ temperature_range }</div>
			</div>
		</div>
	);
}

WeatherInformation.propTypes = {
	info : PropTypes.PropTypes.object.isRequired,
	date: PropTypes.instanceOf(Date)
}

export default WeatherInformation;