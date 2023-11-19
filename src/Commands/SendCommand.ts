import axios from "axios"
import { AxiosResponse } from "axios";

export async function SendCommand(host: string, apikey: string, identifier: string, command: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
			'Content-Type': 'application/json',
            Authorization: `Bearer ${apikey}`
		},
		body: {
			"command": command
		}
	};
	
	return axios.post(`${host}/api/client/servers/${identifier}/command`, options.body, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.res.statusCode
		if (statusCode == 204) {
		return `Sucessful send command "${command}" on server with identifier: ${identifier}`
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};