import axios from "axios"
import { Server } from "./../Objects/Server.js";
import { AxiosResponse } from "axios";

async function UsageInfo(host: string, apikey: string, identifier: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		}
	};
	
	return axios(`${host}/api/client/servers/${identifier}/resources`, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.socket._httpMessage.res.statusCode
		if (statusCode == 200) {
			return res.data.attributes;
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};

export {
	UsageInfo
};