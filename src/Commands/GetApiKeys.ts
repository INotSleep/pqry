import axios from "axios"
import { ApiKey } from "./../Objects/ApiKey.js";
import { AxiosResponse } from "axios";

export async function GetApiKeys(host: string, apikey: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		}
	};
	
	return axios(`${host}/api/client/account/api-keys`, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.res.statusCode
		if (statusCode == 200) {
			var rawApiKeys = res.data.data;
			var apiKeys : ApiKey[] = [];
			for (var rawApiKey of rawApiKeys) {
				var apiKey = rawApiKey.attributes;
				apiKey.host = host;
				apiKey.apikey = apikey;
				apiKeys.push(new ApiKey(apiKey));
			};
			return apiKeys
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};