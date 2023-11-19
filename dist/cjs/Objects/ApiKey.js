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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKey = void 0;
const DeleteApiKey_js_1 = require("./../Commands/DeleteApiKey.js");
class ApiKey {
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
            return yield (0, DeleteApiKey_js_1.DeleteApiKey)(this.host, this.apikey, this.identifier);
        });
    }
}
exports.ApiKey = ApiKey;
;
//# sourceMappingURL=ApiKey.js.map