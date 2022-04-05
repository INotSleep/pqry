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
exports.DeleteBackup = exports.DownloadBackup = exports.GetBackups = exports.GetBackup = exports.CreateBackup = exports.UsageInfo = exports.SendCommand = exports.Signal = exports.GetServer = exports.CreateApiKey = exports.DeleteApiKey = exports.GetApiKeys = exports.GetServers = exports.PQRY = void 0;
const GetServers_js_1 = require("./Commands/GetServers.js");
Object.defineProperty(exports, "GetServers", { enumerable: true, get: function () { return GetServers_js_1.GetServers; } });
const GetApiKeys_js_1 = require("./Commands/GetApiKeys.js");
Object.defineProperty(exports, "GetApiKeys", { enumerable: true, get: function () { return GetApiKeys_js_1.GetApiKeys; } });
const DeleteApiKey_js_1 = require("./Commands/DeleteApiKey.js");
Object.defineProperty(exports, "DeleteApiKey", { enumerable: true, get: function () { return DeleteApiKey_js_1.DeleteApiKey; } });
const CreateApiKey_js_1 = require("./Commands/CreateApiKey.js");
Object.defineProperty(exports, "CreateApiKey", { enumerable: true, get: function () { return CreateApiKey_js_1.CreateApiKey; } });
const GetServer_js_1 = require("./Commands/GetServer.js");
Object.defineProperty(exports, "GetServer", { enumerable: true, get: function () { return GetServer_js_1.GetServer; } });
const Signal_js_1 = require("./Commands/Signal.js");
Object.defineProperty(exports, "Signal", { enumerable: true, get: function () { return Signal_js_1.Signal; } });
const SendCommand_js_1 = require("./Commands/SendCommand.js");
Object.defineProperty(exports, "SendCommand", { enumerable: true, get: function () { return SendCommand_js_1.SendCommand; } });
const UsageInfo_js_1 = require("./Commands/UsageInfo.js");
Object.defineProperty(exports, "UsageInfo", { enumerable: true, get: function () { return UsageInfo_js_1.UsageInfo; } });
const GetBackups_js_1 = require("./Commands/GetBackups.js");
Object.defineProperty(exports, "GetBackups", { enumerable: true, get: function () { return GetBackups_js_1.GetBackups; } });
const CreateBackup_js_1 = require("./Commands/CreateBackup.js");
Object.defineProperty(exports, "CreateBackup", { enumerable: true, get: function () { return CreateBackup_js_1.CreateBackup; } });
const GetBackup_js_1 = require("./Commands/GetBackup.js");
Object.defineProperty(exports, "GetBackup", { enumerable: true, get: function () { return GetBackup_js_1.GetBackup; } });
const DownloadBackup_js_1 = require("./Commands/DownloadBackup.js");
Object.defineProperty(exports, "DownloadBackup", { enumerable: true, get: function () { return DownloadBackup_js_1.DownloadBackup; } });
const DeleteBackup_js_1 = require("./Commands/DeleteBackup.js");
Object.defineProperty(exports, "DeleteBackup", { enumerable: true, get: function () { return DeleteBackup_js_1.DeleteBackup; } });
class PQRY {
    constructor(data) {
        this.host = data.host;
        this.apikey = data.apikey;
    }
    ;
    getServers() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, GetServers_js_1.GetServers)(this.host, this.apikey);
        });
    }
    ;
    getApiKeys() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, GetApiKeys_js_1.GetApiKeys)(this.host, this.apikey);
        });
    }
    ;
    deleteApiKey(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, DeleteApiKey_js_1.DeleteApiKey)(this.host, this.apikey, identifier);
        });
    }
    ;
    createApiKey(description, allowed_ips) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, CreateApiKey_js_1.CreateApiKey)(this.host, this.apikey, description, allowed_ips);
        });
    }
    ;
    getServer(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, GetServer_js_1.GetServer)(this.host, this.apikey, identifier);
        });
    }
    ;
    signal(identifier, signal) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Signal_js_1.Signal)(this.host, this.apikey, identifier, signal);
        });
    }
    ;
    sendCommand(identifier, command) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, SendCommand_js_1.SendCommand)(this.host, this.apikey, identifier, command);
        });
    }
    ;
    usageInfo(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, UsageInfo_js_1.UsageInfo)(this.host, this.apikey, identifier);
        });
    }
    ;
    getBackups(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, GetBackups_js_1.GetBackups)(this.host, this.apikey, identifier);
        });
    }
    ;
    getBackup(identifier, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, GetBackup_js_1.GetBackup)(this.host, this.apikey, identifier, uuid);
        });
    }
    ;
    createBackup(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, CreateBackup_js_1.CreateBackup)(this.host, this.apikey, identifier);
        });
    }
    ;
    downloadBackup(identifier, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, DownloadBackup_js_1.DownloadBackup)(this.host, this.apikey, identifier, uuid);
        });
    }
    ;
    deleteBackup(identifier, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, DeleteBackup_js_1.DeleteBackup)(this.host, this.apikey, identifier, uuid);
        });
    }
    ;
}
exports.PQRY = PQRY;
;
//# sourceMappingURL=index.js.map