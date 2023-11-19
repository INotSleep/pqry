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
exports.Backup = void 0;
const DeleteBackup_js_1 = require("./../Commands/DeleteBackup.js");
class Backup {
    constructor(data) {
        this.uuid = data.uuid;
        this.is_successful = data.is_successful;
        this.is_locked = data.is_locked;
        this.name = data.name;
        this.ignored_files = data.ignored_files;
        this.checksum = data.checksum;
        this.bytes = data.bytes;
        this.created_at = data.created_at;
        this.completed_at = data.completed_at;
        this.identifier = data.identifier;
        this.host = data.host;
        this.apikey = data.apikey;
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, DeleteBackup_js_1.DeleteBackup)(this.host, this.apikey, this.identifier, this.uuid);
        });
    }
}
exports.Backup = Backup;
;
//# sourceMappingURL=Backup.js.map