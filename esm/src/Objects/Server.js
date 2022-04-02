var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Signal } from "./../Commands/Signal.js";
import { SendCommand } from "./../Commands/SendCommand.js";
import { UsageInfo } from "./../Commands/UsageInfo.js";
class Server {
    constructor(data) {
        this.power = {
            start: () => Signal(this.host, this.apikey, this.identifier, "start"),
            restart: () => Signal(this.host, this.apikey, this.identifier, "restart"),
            stop: () => Signal(this.host, this.apikey, this.identifier, "stop"),
            kill: () => Signal(this.host, this.apikey, this.identifier, "kill")
        };
        this.server_owner = data.server_owner;
        this.identifier = data.identifier;
        this.internal_id = data.internal_id;
        this.uuid = data.uuid;
        this.name = data.name;
        this.cpu2 = data.cpu2;
        this.node = data.node;
        this.nest_id = data.nest_id;
        this.sftp_details = data.sftp_details;
        this.description = data.description;
        this.limits = data.limits;
        this.invocation = data.invocation;
        this.docker_image = data.docker_image;
        this.egg_features = data.egg_features;
        this.feature_limits = data.feature_limits;
        this.status = data.status;
        this.is_suspended = data.is_suspended;
        this.is_installing = data.is_installing;
        this.is_transferring = data.is_transferring;
        this.allocations = data.allocations;
        this.host = data.host;
        this.apikey = data.apikey;
    }
    ;
    sendCommand(command) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SendCommand(this.host, this.apikey, this.identifier, command);
        });
    }
    ;
    usage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UsageInfo(this.host, this.apikey, this.identifier);
        });
    }
}
;
export { Server };
