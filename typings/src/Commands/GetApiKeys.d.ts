import { ApiKey } from "./../Objects/ApiKey.js";
declare function GetApiKeys(host: string, apikey: string): Promise<void | ApiKey[]>;
export { GetApiKeys };
