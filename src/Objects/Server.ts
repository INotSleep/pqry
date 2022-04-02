import { Signal } from "./../Commands/Signal.js";
import { SendCommand } from "./../Commands/SendCommand.js"
import { UsageInfo } from "./../Commands/UsageInfo.js";

class Server {
	server_owner: boolean;
	identifier: string;
	internal_id: string;
	uuid: string;
	name: string;
	cpu2: string;
	node: string;
	nest_id: string;
	sftp_details: {
		ip: string,
		port: number
	};
	description: string;
	limits: {
		memory: number,
		swap: number,
		disk: number,
		io: number,
		cpu: number,
		threads: number,
		oop_disabled: boolean
	};
	invocation: string;
	docker_image: string;
	egg_features: string[];
	feature_limits: {
		databases: number,
		allocations: number,
		backups: number
	};
	status: any;
	is_suspended: boolean;
	is_installing: boolean;
	is_transferring: boolean;
	allocations: any;
	host: string;
	apikey: string;
	
	constructor (data: {
		server_owner: boolean,
		identifier: string,
		internal_id: string,
		uuid: string,
		name: string,
		cpu2: string,
		node: string,
		nest_id: string,
		sftp_details: {
			ip: string,
			port: number
		},
		description: string,
		limits: {
			memory: number,
			swap: number,
			disk: number,
			io: number,
			cpu: number,
			threads: number,
			oop_disabled: boolean
		},
		invocation: string,
		docker_image: string,
		egg_features: string[],
		feature_limits: {
			databases: number,
			allocations: number,
			backups: number
		},
		status: any,
		is_suspended: boolean,
		is_installing: boolean,
		is_transferring: boolean,
		allocations: any,
		host: string,
		apikey: string,
	}) {
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
	};
		
	power = {
		start: () => Signal(this.host, this.apikey, this.identifier, "start"),
		restart: () => Signal(this.host, this.apikey, this.identifier, "restart"),
		stop: () => Signal(this.host, this.apikey, this.identifier, "stop"),
		kill: () => Signal(this.host, this.apikey, this.identifier, "kill")
	};
	
	async sendCommand(command: string) {
		return await SendCommand(this.host, this.apikey, this.identifier, command);
	};
	
	async usage() {
		return await UsageInfo(this.host, this.apikey, this.identifier)
	}
};

export {
	Server
};