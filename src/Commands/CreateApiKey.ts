import axios from "axios"
import { ApiKey } from "./../Objects/ApiKey.js";
import { AxiosResponse } from "axios";

export async function CreateApiKey(host: string, apikey: string, description: string, allowed_ips?: string[]) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		"Content-Type": "application/json",
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		},
		body: {
			description: description,
			allowed_ips: allowed_ips ? allowed_ips : []
		}
	};
	
	return axios.post(`${host}/api/client/account/api-keys`, options.body, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.res.statusCode
		if (statusCode == 201) {
			var apiKey = new ApiKey(res.data.attributes);
			return apiKey
		} else console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};