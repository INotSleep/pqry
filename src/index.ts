import { GetServers } from "./Commands/GetServers.js";
import { GetApiKeys } from "./Commands/GetApiKeys.js";
import { DeleteApiKey } from "./Commands/DeleteApiKey.js";
import { CreateApiKey } from "./Commands/CreateApiKey.js";
import { GetServer } from "./Commands/GetServer.js";
import { Signal } from "./Commands/Signal.js";
import { SendCommand } from "./Commands/SendCommand.js";
import { UsageInfo } from "./Commands/UsageInfo.js"
import { GetBackups } from "./Commands/GetBackups.js";
import { CreateBackup } from "./Commands/CreateBackup.js";
import { GetBackup } from "./Commands/GetBackup.js";
import { DownloadBackup } from "./Commands/DownloadBackup.js";
import { DeleteBackup } from "./Commands/DeleteBackup.js";

class PQRY {
	host: any;
    apikey: any;
	
	constructor (data: {
		host: any,
		apikey: any
	}) {
		this.host = data.host;
		this.apikey = data.apikey;
	};
	
	async getServers() {
		return GetServers(this.host, this.apikey)
	};
	
	async getApiKeys() {
		return GetApiKeys(this.host, this.apikey)
	};
	
	async deleteApiKey(identifier: string) {
		return DeleteApiKey(this.host, this.apikey, identifier)
	};
	
	async createApiKey(description: string, allowed_ips?: string[]) {
		return CreateApiKey(this.host, this.apikey, description, allowed_ips)
	};
	
	async getServer(identifier: string) {
		return GetServer(this.host, this.apikey, identifier)
	};
	
	async signal(identifier: string, signal: string) {
		return Signal(this.host, this.apikey, identifier, signal)
	};
	
	async sendCommand(identifier: string, command: string) {
		return SendCommand(this.host, this.apikey, identifier, command)
	};
	
	async usageInfo(identifier: string) {
		return UsageInfo(this.host, this.apikey, identifier)
	};
	
	async getBackups(identifier: string) {
		return GetBackups(this.host, this.apikey, identifier)
	};
	
	async getBackup(identifier: string, uuid: string) {
		return GetBackup(this.host, this.apikey, identifier, uuid)
	};
	
	async createBackup(identifier: string) {
		return CreateBackup(this.host, this.apikey, identifier)
	};
	
	async downloadBackup(identifier: string, uuid: string) {
		return DownloadBackup(this.host, this.apikey, identifier, uuid)
	};
	
	async deleteBackup(identifier: string, uuid: string) {
		return DeleteBackup(this.host, this.apikey, identifier, uuid)
	};
};

export { 
	PQRY,
	GetServers,
	GetApiKeys,
	DeleteApiKey,
	CreateApiKey,
	GetServer,
	Signal,
	SendCommand,
	UsageInfo,
	CreateBackup,
	GetBackup,
	GetBackups,
	DownloadBackup,
	DeleteBackup
};