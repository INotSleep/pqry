import axios from "axios"
import { AxiosResponse } from "axios";

export async function GetWebSocketCredentials(host: string, apikey: string, identifier: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		}
	};
	
	return axios(`${host}/api/client/servers/${identifier}/websocket`, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.res.statusCode
		if (statusCode == 200) {	
			return res.data.data;
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};