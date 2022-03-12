import { GetServers } from "./Commands/GetServers.js";
import { GetApiKeys } from "./Commands/GetApiKeys.js";
import { DeleteApiKey } from "./Commands/DeleteApiKey.js";
import { CreateApiKey } from "./Commands/CreateApiKey.js";
import { GetServer } from "./Commands/GetServer.js";
import { Signal } from "./Commands/Signal.js";
import { SendCommand } from "./Commands/SendCommand.js";
import { UsageInfo } from "./Commands/UsageInfo.js"

export default class PQRY {
	constructor ({ host, apikey }) {
		this.host = host;
		this.apikey = apikey;
	}
	
	async getServers() {
		return GetServers(this.host, this.apikey);
	}
	
	async getApiKeys() {
		return GetApiKeys(this.host, this.apikey);
	}
	
	async deleteApiKey(id) {
		return DeleteApiKey(this.host, this.apikey, id);
	}
	
	async createApiKey(description, allowedIps) {
		return CreateApiKey(this.host, this.apikey, description, allowedIps);
	}
	
	async getServer(id) {
		return GetServer(this.host. this.apikey, identifier);
	}
	
	async signal(id, signal) {
		return Signal(this.host, this.apikey, id, signal);
	}
	
	async sendCommand(id, command) {
		return SendCommand(this.host, this.apikey, id, command);
	}
	
	async usageInfo(id) {
		return UsageInfo(this.host, this.apikey, id);
	}
}

export { 
	PQRY,
	GetServers,
	GetApiKeys,
	DeleteApiKey,
	CreateApiKey,
	GetServer,
	Signal,
	SendCommand,
	UsageInfo
};