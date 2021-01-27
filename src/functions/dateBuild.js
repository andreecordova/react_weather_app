const dateBuild = (d) => {
	let [date, time] = d.toLocaleString('es-PE').split(' ');
	return { 
		date_format: date, 
		time_format: time
	};
};

export default dateBuild;