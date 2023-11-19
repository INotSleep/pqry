import { DeleteApiKey } from "./../Commands/DeleteApiKey.js";

export class ApiKey {
	identifier: string
	description: string
	allowed_ips: string[]
	last_used_at: string
	created_at: string
	host: string;
	apikey: string;
	
	constructor (data: {
		identifier: string,
		description: string,
		allowed_ips: string[],
		last_used_at: string,
		created_at: string,
		host: string,
		apikey: string
	}) {
		this.identifier = data.identifier
		this.description = data.description;
		this.allowed_ips = data.allowed_ips;
		this.last_used_at = data.last_used_at;
		this.created_at = data.created_at;
		this.host = data.host;
		this.apikey = data.apikey;
	}

	async delete() {
		return await DeleteApiKey(this.host, this.apikey, this.identifier)
	}
};