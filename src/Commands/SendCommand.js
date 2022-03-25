import axios from "axios"

async function SendCommand(host, apikey, identifier, command) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		method: "POST",
		headers: {
			Accept: "application/json",
			'Content-Type': 'application/json',
    		        Authorization: "Bearer "+apikey
		},
		body: {
			"command": command
		}
	};
	return axios.post(host + "/api/client/servers/" + identifier + "/command", options.body, options)
	.then(res => {
		let statusCode = res.request.socket._httpMessage.res.statusCode
		if (statusCode == 204) {
		return console.log("Sucessful send command \""+ command +"\" on server with identifier: " + identifier)
		} return console.log(`Someting went wrong!${res.statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	}).catch(e => console.log(e));
};

export {
	SendCommand
};
