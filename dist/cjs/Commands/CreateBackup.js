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
exports.CreateBackup = void 0;
const axios_1 = __importDefault(require("axios"));
const Backup_js_1 = require("./../Objects/Backup.js");
function CreateBackup(host, apikey, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
        apikey = apikey.replace(" ", "").replace("Bearer", "");
        var options = {
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apikey}`
            }
        };
        return axios_1.default.post(`${host}/api/client/servers/${identifier}/backups`, options, options)
            .then((res) => {
            let statusCode = res.request.res.statusCode;
            if (statusCode == 200) {
                var backup = res.data.attributes;
                backup.host = host;
                backup.apikey = apikey;
                backup.identifier = identifier;
                return new Backup_js_1.Backup(backup);
            }
            return console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
        })
            .catch(e => console.log(e));
    });
}
exports.CreateBackup = CreateBackup;
;
//# sourceMappingURL=CreateBackup.js.map