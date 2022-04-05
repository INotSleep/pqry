"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServer = void 0;
const axios_1 = __importDefault(require("axios"));
const Server_js_1 = require("./../Objects/Server.js");
function GetServer(host, apikey, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
        apikey = apikey.replace(" ", "").replace("Bearer", "");
        var options = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${apikey}`
            }
        };
        return (0, axios_1.default)(`${host}/api/client/servers/${identifier}`, options)
            .then((res) => {
            let statusCode = res.request.socket._httpMessage.res.statusCode;
            if (statusCode == 200) {
                var server = res.data.attributes;
                var allocations = [];
                var rawAllocations = res.data.attributes.relationships.allocations.data;
                for (var rawAllocation of rawAllocations) {
                    allocations.push(rawAllocation.attributes);
                }
                ;
                server.allocations = allocations;
                server.host = host;
                server.apikey = apikey;
                return new Server_js_1.Server(server);
            }
            else
                return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
        })
            .catch(e => console.log(e));
    });
}
exports.GetServer = GetServer;
;
//# sourceMappingURL=GetServer.js.map