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
declare class PQRY {
    host: any;
    apikey: any;
    constructor(data: {
        host: any;
        apikey: any;
    });
    getServers(): Promise<void | import("./Objects/Server.js").Server[] | undefined>;
    getApiKeys(): Promise<void | import("./Objects/ApiKey.js").ApiKey[]>;
    deleteApiKey(identifier: string): Promise<void>;
    createApiKey(description: string, allowed_ips?: string[]): Promise<void | import("./Objects/ApiKey.js").ApiKey | undefined>;
    getServer(identifier: string): Promise<void | import("./Objects/Server.js").Server>;
    signal(identifier: string, signal: string): Promise<string | void>;
    sendCommand(identifier: string, command: string): Promise<string | void>;
    usageInfo(identifier: string): Promise<any>;
    getBackups(identifier: string): Promise<void | import("./Objects/Backup.js").Backup[]>;
    getBackup(identifier: string, uuid: string): Promise<void | import("./Objects/Backup.js").Backup>;
    createBackup(identifier: string): Promise<void | import("./Objects/Backup.js").Backup>;
    downloadBackup(identifier: string, uuid: string): Promise<any>;
    deleteBackup(identifier: string, uuid: string): Promise<void>;
}
export { PQRY, GetServers, GetApiKeys, DeleteApiKey, CreateApiKey, GetServer, Signal, SendCommand, UsageInfo, CreateBackup, GetBackup, GetBackups, DownloadBackup, DeleteBackup };
