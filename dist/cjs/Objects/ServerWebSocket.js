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
exports.ServerWebSocket = void 0;
const ws_1 = __importDefault(require("ws"));
const node_events_1 = require("node:events");
class ServerWebSocket extends node_events_1.EventEmitter {
    constructor(server, autoExtend) {
        super();
        this.closedSendedCommands = [];
        this.server = server;
        this.autoExtend = !!autoExtend;
    }
    auth() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.server.getWebSocketCredentials();
            this.socket = new ws_1.default(data.socket, [], {
                headers: {
                    "Origin": this.server.host,
                    "Referer": this.server.host
                }
            });
            this.socket.on("message", (message) => {
                var _a;
                this.emit("rawmessage", message.toString);
                message = JSON.parse(message.toString());
                let data = message.args ? message.args[0] : null;
                switch (message.event) {
                    case "stats": {
                        this.emit("stats", JSON.parse(data));
                        break;
                    }
                    case "console output": {
                        this.emit("log", data);
                        break;
                    }
                    case "token expiring": {
                        if (this.autoExtend) {
                            (_a = this.socket) === null || _a === void 0 ? void 0 : _a.close();
                            this.auth();
                            return;
                        }
                        this.emit("token_expiring");
                        break;
                    }
                    case "token expired": {
                        this.emit("token_expired");
                        break;
                    }
                    case "auth success": {
                        this.emit("open");
                        break;
                    }
                }
            });
            this.socket.on("close", (code, message) => {
                this.emit("close", code, message);
                this.socket = null;
            });
            this.socket.on("error", (message) => {
                this.emit("error", (message));
                this.socket = null;
            });
            this.socket.on("open", () => {
                this.send({ "event": "auth", "args": [data.token] });
                this.emit("socket_open");
            });
        });
    }
    send(message) {
        if (!this.socket) {
            this.closedSendedCommands.push(message);
            return;
        }
        if (typeof message != "string")
            message = JSON.stringify(message);
        this.socket.send(message);
    }
    sendCommand(command) {
        this.send({ "event": "send command", "args": [command] });
    }
    sendSignal(signal) {
        this.send({ "event": "set state", "args": [signal] });
    }
    requestLogs() {
        this.send({ "event": "send logs", "args": [null] });
    }
    requestStats() {
        this.send({ "event": "send stats", "args": [null] });
    }
}
exports.ServerWebSocket = ServerWebSocket;
//# sourceMappingURL=ServerWebSocket.js.map