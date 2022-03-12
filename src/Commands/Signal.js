import axios from "axios"

async function Signal(host, apikey, identifier, signal) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		method: "POST",
		headers: {
			Accept: "application/json",
			'Content-Type': 'application/json',
            Authorization: "Bearer "+apikey
		},
		body: {
			"signal": signal
		}
	};
	return axios.post(host + "/api/client/servers/" + identifier + "/power", options.body, options)
	.then(res => {
		let statusCode = res.request.socket._httpMessage.res.statusCode
		if (statusCode == 204) {
		return console.log("Sucessful "+ signal +" server with identifier: " + identifier)
		} return console.log(`Someting went wrong!${res.statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	}).catch(e => console.log(e));
};

export {
	Signal
};