import axios from "axios"
import { AxiosResponse } from "axios";

export async function DeleteApiKey(host: string, apikey: string, identifier: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		}
	};
	
	axios.delete(`${host}/api/client/account/api-keys/${identifier}`, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.res.statusCode
		if (statusCode == 204) {
		return `Sucessful deleted api key with identifier: ${identifier}`
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};