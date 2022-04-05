import axios from "axios"
import { AxiosResponse } from "axios";
import { Backup } from "./../Objects/Backup.js";

async function CreateBackup(host: string, apikey: string, identifier: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
			'Content-Type': 'application/json',
            Authorization: `Bearer ${apikey}`
		}
	};
	
	return axios.post(`${host}/api/client/servers/${identifier}/backups`, options, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.socket._httpMessage.res.statusCode;
		if (statusCode == 200) {
		var backup = res.data.attributes
		backup.host = host;
		backup.apikey = apikey;
		backup.identifier = identifier;
		return new Backup(backup);
		} return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};

export {
	CreateBackup
};