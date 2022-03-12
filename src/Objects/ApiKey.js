import { DeleteApiKey } from "./../Commands/DeleteApiKey.js";

class ApiKey {
	constructor ({identifier, description, allowed_ips, last_used_at, created_at, host, apikey}) {
		this.identifier = identifier
		this.description = description;
		this.allowed_ips = allowed_ips;
		this.last_used_at = last_used_at;
		this.created_at = created_at;
		this.host = host;
		this.apikey = apikey;
	
		async delete() {
			return await DeleteApiKey(this.host, this.apikey, this.identifier)
	    }
	};
};

export {
	ApiKey
};
