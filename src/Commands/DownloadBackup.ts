import axios from "axios"
import { AxiosResponse } from "axios";

async function DownloadBackup(host: string, apikey: string, identifier: string, uuid: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		}
	};
	
	return axios(`${host}/api/client/servers/${identifier}/backups/${uuid}/download`, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.socket._httpMessage.res.statusCode
		if (statusCode == 200) {
			var link = res.data.attributes.url;
			return link;
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};

export {
	DownloadBackup
};