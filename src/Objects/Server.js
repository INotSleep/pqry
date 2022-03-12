import { Signal } from "./../Commands/Signal.js";
import { SendCommand } from "./../Commands/SendCommand.js"
import { UsageInfo } from "./../Commands/UsageInfo.js";

class Server {
	constructor ({server_owner, identifier, internal_id, uuid, name, cpu2, node, nest_id, sftp_details, description, limits, invocation, docker_image, egg_features, feature_limits, status, is_suspended, is_installing, is_transferring, allocations, host, apikey}) {
		this.server_owner = server_owner;
		this.identifier = identifier;
		this.internal_id = internal_id;
		this.uuid = uuid;
		this.name = name;
		this.cpu2 = cpu2;
		this.node = node;
		this.nest_id = nest_id;
		this.sftp_details = sftp_details;
		this.description = description;
		this.limits = limits;
		this.invocation = invocation;
		this.docker_image = docker_image;
		this.egg_features = egg_features;
		this.feature_limits = feature_limits;
		this.status = status;
		this.is_suspended = is_suspended;
		this.is_installing = is_installing;
		this.is_transferring = is_transferring;
		this.allocations = allocations;
		this.host = host;
		this.apikey = apikey;
		
		this.power = {
			start: () => Signal(this.host, this.apikey, this.identifier, "start"),
			restart: () => Signal(this.host, this.apikey, this.identifier, "restart"),
			stop: () => Signal(this.host, this.apikey, this.identifier, "stop"),
			kill: () => Signal(this.host, this.apikey, this.identifier, "kill")
		};
		async sendCommand(command) {
			return SendCommand(this.host, this.apikey, this.identifier, command);
		};
		async usage() {
			return UsageInfo(this.host, this.apikey, this.identifier)
		}
	};
};

export {
	Server
};
