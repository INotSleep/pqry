var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GetServers } from "./Commands/GetServers.js";
import { GetApiKeys } from "./Commands/GetApiKeys.js";
import { DeleteApiKey } from "./Commands/DeleteApiKey.js";
import { CreateApiKey } from "./Commands/CreateApiKey.js";
import { GetServer } from "./Commands/GetServer.js";
import { Signal } from "./Commands/Signal.js";
import { SendCommand } from "./Commands/SendCommand.js";
import { UsageInfo } from "./Commands/UsageInfo.js";
import { GetBackups } from "./Commands/GetBackups.js";
import { CreateBackup } from "./Commands/CreateBackup.js";
import { GetBackup } from "./Commands/GetBackup.js";
import { DownloadBackup } from "./Commands/DownloadBackup.js";
import { DeleteBackup } from "./Commands/DeleteBackup.js";
import { GetWebSocketCredentials } from "./Commands/GetWebSocketCredentials.js";
class PQRY {
    constructor(data) {
        this.host = data.host;
        this.apikey = data.apikey;
    }
    ;
    getServers() {
        return __awaiter(this, void 0, void 0, function* () {
            return GetServers(this.host, this.apikey);
        });
    }
    ;
    getApiKeys() {
        return __awaiter(this, void 0, void 0, function* () {
            return GetApiKeys(this.host, this.apikey);
        });
    }
    ;
    deleteApiKey(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return DeleteApiKey(this.host, this.apikey, identifier);
        });
    }
    ;
    createApiKey(description, allowed_ips) {
        return __awaiter(this, void 0, void 0, function* () {
            return CreateApiKey(this.host, this.apikey, description, allowed_ips);
        });
    }
    ;
    getServer(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return GetServer(this.host, this.apikey, identifier);
        });
    }
    ;
    signal(identifier, signal) {
        return __awaiter(this, void 0, void 0, function* () {
            return Signal(this.host, this.apikey, identifier, signal);
        });
    }
    ;
    sendCommand(identifier, command) {
        return __awaiter(this, void 0, void 0, function* () {
            return SendCommand(this.host, this.apikey, identifier, command);
        });
    }
    ;
    usageInfo(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return UsageInfo(this.host, this.apikey, identifier);
        });
    }
    ;
    getBackups(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return GetBackups(this.host, this.apikey, identifier);
        });
    }
    ;
    getBackup(identifier, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return GetBackup(this.host, this.apikey, identifier, uuid);
        });
    }
    ;
    createBackup(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return CreateBackup(this.host, this.apikey, identifier);
        });
    }
    ;
    downloadBackup(identifier, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return DownloadBackup(this.host, this.apikey, identifier, uuid);
        });
    }
    ;
    deleteBackup(identifier, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return DeleteBackup(this.host, this.apikey, identifier, uuid);
        });
    }
    ;
    getWebSocketCredentials(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return GetWebSocketCredentials(this.host, this.apikey, identifier);
        });
    }
    ;
}
;
export { PQRY, GetServers, GetApiKeys, DeleteApiKey, CreateApiKey, GetServer, Signal, SendCommand, UsageInfo, CreateBackup, GetBackup, GetBackups, DownloadBackup, DeleteBackup, GetWebSocketCredentials };
//# sourceMappingURL=index.js.map