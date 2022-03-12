import axios from "axios"
import { ApiKey } from "./../Objects/ApiKey.js";

async function GetApiKeys(host, apikey) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: "Bearer "+apikey
		}
	};
	
	return axios(host + "/api/client/account/api-keys", options).then (res => {
		let statusCode = res.request.socket._httpMessage.res.statusCode
		if (statusCode == 200) {
			var rawApiKeys = res.data.data;
			var apiKeys = [];
			for (var rawApiKey of rawApiKeys) {
				var apiKey = new ApiKey(rawApiKey.attributes);
				apiKey.host = host;
				apiKey.apikey = apikey;
				apiKeys.push(apiKey);
			};
			return apiKeys
		} else return console.log(`Someting went wrong!${res.statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	});
};

export {
	GetApiKeys
};