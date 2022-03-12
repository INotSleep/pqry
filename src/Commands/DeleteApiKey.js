import axios from "axios"

async function DeleteApiKey(host, apikey, identifier) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		method: "DELETE",
		headers: {
			Accept: "application/json",
            Authorization: "Bearer "+apikey
		}
	};
	axios.post(host + "/api/client/account/api-keys/" + identifier, options.body, options).then(res => {
		let statusCode = res.request.socket._httpMessage.res.statusCode
		if (statusCode == 204) {
		return "Sucessful deleted api key with identifier: " + identifier
		} else return console.log(`Someting went wrong!${res.statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	}).catch(e => e);
};

export {
	DeleteApiKey
};