import axios from "axios"
import { AxiosResponse } from "axios";

export async function DeleteBackup(host: string, apikey: string, identifier: string, uuid: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		}
	};
	
	axios.delete(`${host}/api/client/servers/${identifier}/backups/${uuid}`, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.res.statusCode
		if (statusCode == 204) {
		return `Sucessful backup deleted with identifier: ${uuid}`
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};