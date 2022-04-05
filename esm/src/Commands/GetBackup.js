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
import { Backup } from "./../Objects/Backup.js";
function GetBackup(host, apikey, identifier, uuid) {
    return __awaiter(this, void 0, void 0, function* () {
        apikey = apikey.replace(" ", "").replace("Bearer", "");
        var options = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${apikey}`
            }
        };
        return axios(`${host}/api/client/servers/${identifier}/backups/${uuid}`, options)
            .then((res) => {
            let statusCode = res.request.socket._httpMessage.res.statusCode;
            if (statusCode == 200) {
                var backup = res.data.attributes;
                backup.host = host;
                backup.apikey = apikey;
                backup.identifier = identifier;
                return new Backup(backup);
            }
            else
                return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
        })
            .catch(e => console.log(e));
    });
}
;
export { GetBackup };
