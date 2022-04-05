import { DownloadBackup } from "./../Commands/DownloadBackup.js";
import { DeleteBackup } from "./../Commands/DeleteBackup.js";

class Backup {
	uuid: string;
	is_successful: boolean;
	is_locked: boolean;
	name: string;
	ignored_files: string[];
	checksum: string;
	bytes: number;
	created_at: string;
	completed_at: string;
	identifier: string;
	host: string;
	apikey: string;
	
	constructor (data: {
		uuid: string,
		is_successful: boolean,
		is_locked: boolean,
		name: string,
		ignored_files: string[],
		checksum: string,
		bytes: number,
		created_at: string,
		completed_at: string,
		identifier: string,
		host: string,
		apikey: string,
	}) {
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

	async delete() {
		return await DeleteBackup(this.host, this.apikey, this.identifier, this.uuid)
	}
};

export {
	Backup
};