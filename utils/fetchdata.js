export const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};
