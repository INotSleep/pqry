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
import { ApiKey } from "./../Objects/ApiKey.js";
export function CreateApiKey(host, apikey, description, allowed_ips) {
    return __awaiter(this, void 0, void 0, function* () {
        apikey = apikey.replace(" ", "").replace("Bearer", "");
        var options = {
            "Content-Type": "application/json",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: {
                description: description,
                allowed_ips: allowed_ips ? allowed_ips : []
            }
        };
        return axios.post(`${host}/api/client/account/api-keys`, options.body, options)
            .then((res) => {
            let statusCode = res.request.res.statusCode;
            if (statusCode == 201) {
                var apiKey = new ApiKey(res.data.attributes);
                return apiKey;
            }
            else
                console.log(`Someting went wrong!${statusCode ? `\nStatus Code: ${statusCode}` : ""}`);
        })
            .catch(e => console.log(e));
    });
}
;
//# sourceMappingURL=CreateApiKey.js.map