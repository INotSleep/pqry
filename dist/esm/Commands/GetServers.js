var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { Server } from "./../Objects/Server.js";
export function GetServers(host, apikey) {
    return __awaiter(this, void 0, void 0, function* () {
        apikey = apikey.replace(" ", "").replace("Bearer", "");
        var options = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${apikey}`
            }
        };
        return axios(`${host}/api/client`, options)
            .then((res) => {
            let statusCode = res.request.res.statusCode;
            if (statusCode == 200) {
                var servers = [];
                var rawServers = res.data.data;
                for (var rawServer of rawServers) {
                    var allocations = [];
                    var rawAllocations = rawServer.attributes.relationships.allocations.data;
                    for (var rawAllocation of rawAllocations) {
                        allocations.push(rawAllocation.attributes);
                    }
                    ;
                    var server = rawServer.attributes;
                    server.allocations = allocations;
                    server.host = host;
                    server.apikey = apikey;
                    servers.push(new Server(server));
                }
                return servers;
            }
            else
                console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
        })
            .catch(e => console.log(e));
    });
}
;
//# sourceMappingURL=GetServers.js.map