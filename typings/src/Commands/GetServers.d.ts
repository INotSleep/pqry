import { Server } from "./../Objects/Server.js";
declare function GetServers(host: string, apikey: string): Promise<void | Server[] | undefined>;
export { GetServers };
