import axios from "axios"
import { Server } from "./../Objects/Server.js";
import { AxiosResponse } from "axios";

async function GetServer(host: string, apikey: string, identifier: string) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: `Bearer ${apikey}`
		}
	};
	
	return axios(`${host}/api/client/servers/${identifier}`, options)
	.then((res: AxiosResponse) => {
		let statusCode = res.request.socket._httpMessage.res.statusCode
		if (statusCode == 200) {
			var server = res.data.attributes;
			var allocations = []
			var rawAllocations = res.data.attributes.relationships.allocations.data;
			for(var rawAllocation of rawAllocations) {
				allocations.push(rawAllocation.attributes);
			};
			server.allocations = allocations;
			server.host = host
			server.apikey = apikey
			return new Server(server);
		} else return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	})
	.catch(e => console.log(e));
};

export {
	GetServer
};