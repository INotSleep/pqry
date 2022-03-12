import { GetServers } from "./Commands/GetServers.js";
import { GetApiKeys } from "./Commands/GetApiKeys.js";
import { DeleteApiKey } from "./Commands/DeleteApiKey.js";
import { CreateApiKey } from "./Commands/CreateApiKey.js";
import { GetServer } from "./Commands/GetServer.js";
import { Signal } from "./Commands/Signal.js";
import { SendCommand } from "./Commands/SendCommand.js";
import { UsageInfo } from "./Commands/UsageInfo.js"

class PQRY {
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
		
	}
		this.getServer = async function (identifier) {
			return GetServer(this.host, this.apikey, identifier)
		};
		this.signal = async function (identifier, signal) {
			return Signal(this.host, this.apikey, identifier, signal)
		}
		this.sendCommand = async function (identifier, command) {
			return SendCommand(this.host, this.apikey, identifier, command)
		}
		this.usageInfo = async function (identifier) {
			return UsageInfo(this.host, this.apikey, identifier)
		};
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
	UsageInfo
};