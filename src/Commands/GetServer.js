import axios from "axios"
import { Server } from "./../Objects/Server.js";

async function GetServer(host, apikey, identifier) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: "Bearer "+apikey
		}
	};
	
		return axios(host + "/api/client/servers/"+identifier, options).then(res => {
			let statusCode = res.request.socket._httpMessage.res.statusCode
			if (statusCode == 200) {
				var server = new Server(res.data.attributes);
				var allocations = []
				var rawAllocations = res.data.attributes.relationships.allocations.data;
				for(var rawAllocation of rawAllocations) {
					allocations.push(rawAllocation.attributes);
				};
				server.allocations = allocations;
				server.host = host
				server.apikey = apikey
				return server;
			} else return console.log(`Someting went wrong!${res.statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
		}).catch(e => console.log(e));
};

export {
	GetServer
};