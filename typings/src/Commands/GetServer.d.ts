import { Server } from "./../Objects/Server.js";
declare function GetServer(host: string, apikey: string, identifier: string): Promise<void | Server>;
export { GetServer };
