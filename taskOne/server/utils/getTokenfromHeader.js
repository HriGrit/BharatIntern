const getTokenfromHeader = (req, res, next) => {
	const requestHeader = req.headers;
	// console.log(requestHeader)
	const token = requestHeader["authorization"].split(" ")[1];
	if (token !== undefined) {
		return token;
	} else {
		console.log("No Token");
	}
};

module.exports = getTokenfromHeader;
