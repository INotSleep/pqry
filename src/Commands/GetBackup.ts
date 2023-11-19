import axios from "axios"
import { AxiosResponse } from "axios";
import { Backup } from "./../Objects/Backup.js";

export async function GetBackup(host: string, apikey: string, identifier: string, uuid: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		}
	};
	
	return axios(`${host}/api/client/servers/${identifier}/backups/${uuid}`, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.res.statusCode
		if (statusCode == 200) {
		var backup = res.data.attributes
		backup.host = host;
		backup.apikey = apikey;
		backup.identifier = identifier;
		return new Backup(backup);
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};