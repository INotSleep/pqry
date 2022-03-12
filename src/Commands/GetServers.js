import axios from "axios"
import { Server } from "./../Objects/Server.js";

async function GetServers(host, apikey) {
	apikey = apikey.replace(" ", "").replace("Bearer", "")
	var options = {
		headers: {
			Accept: "application/json",
            Authorization: "Bearer "+apikey
		}
	};
	
	
	return axios(host + "/api/client", options).then(res => {
		let statusCode = res.request.socket._httpMessage.res.statusCode;
		if (statusCode == 200) {
			var servers = [];
			var rawServers = res.data.data;
			for(var rawServer of rawServers) {
				var allocations = [];
				var rawAllocations = rawServer.attributes.relationships.allocations.data;
				for(var rawAllocation of rawAllocations) {
					allocations.push(rawAllocation.attributes)
				};
				var server = new Server(rawServer.attributes);
				server.allocations = allocations;
				server.host = host;
				server.apikey = apikey;
				servers.push(server);
			}
			return servers;
		} else console.log(`Someting went wrong!${res.statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
	});
};

export {
	GetServers
};
