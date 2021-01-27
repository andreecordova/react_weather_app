const setBackground = (d) => {
	const hour = d.getHours();

	if (hour <= 7 || hour > 18) {
		return 'wheather_card night';
	}
	
	if (hour > 7 && hour <= 15) {
		return 'wheather_card day';
	}

	return 'wheather_card evening';
}

export default setBackground;