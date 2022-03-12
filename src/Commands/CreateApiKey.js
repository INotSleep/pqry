import axios from "axios"
import { ApiKey } from "./../Objects/ApiKey.js";

async function CreateApiKey(host, apikey, description, allowed_ips) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		method: "POST",
		"Content-Type": "application/json",
		headers: {
			Accept: "application/json",
            Authorization: "Bearer RmhHAXDimIsZ52iL8AsKYTrgvCBceKghbIVRjEh2ED7fsRbc"
		},
		body: {
			description: description,
			allowed_ips: allowed_ips ? allowed_ips : []
		}
	};
	
		return axios.post(host + "/api/client/account/api-keys", options.body, options).then(res => {
			let statusCode = res.request.socket._httpMessage.res.statusCode
			if (statusCode == 201) {
				var apiKey = new ApiKey(res.body.attributes);
				return apiKey
			} else console.log(`Someting went wrong!${res.statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
		}).catch(e => console.log(e));
};

export {
	CreateApiKey
};