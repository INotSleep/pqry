import axios from "axios"
import { AxiosResponse } from "axios";

export async function Signal(host: string, apikey: string, identifier: string, signal: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
			'Content-Type': 'application/json',
            Authorization: `Bearer ${apikey}`
		},
		body: {
			"signal": signal
		}
	};
	
	return axios.post(`${host}/api/client/servers/${identifier}/power`, options.body, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.res.statusCode;
		if (statusCode == 204) {
		return `Sucessful ${signal} server with identifier: ${identifier}`;
		} return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};