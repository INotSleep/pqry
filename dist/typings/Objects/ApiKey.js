var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DeleteApiKey } from "./../Commands/DeleteApiKey.js";
export class ApiKey {
    constructor(data) {
        this.identifier = data.identifier;
        this.description = data.description;
        this.allowed_ips = data.allowed_ips;
        this.last_used_at = data.last_used_at;
        this.created_at = data.created_at;
        this.host = data.host;
        this.apikey = data.apikey;
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DeleteApiKey(this.host, this.apikey, this.identifier);
        });
    }
}
;
//# sourceMappingURL=ApiKey.js.map