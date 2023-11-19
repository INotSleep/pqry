import axios from "axios"
import { AxiosResponse } from "axios";
import { Backup } from "./../Objects/Backup.js";

export async function GetBackups(host: string, apikey: string, identifier: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		}
	};
	
	return axios(`${host}/api/client/servers/${identifier}/backups`, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.res.statusCode
		if (statusCode == 200) {
			var rawBackups = res.data.data;
			var backups: Backup[] = [];
			for (var rawBackup of rawBackups) {
				var backup = res.data.attributes
				backup.host = host;
				backup.apikey = apikey;
				backup.identifier = identifier;
				backups.push(new Backup(backup));
			};
			return backups
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};