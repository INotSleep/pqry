import { ApiKey } from "./../Objects/ApiKey.js";
export declare function CreateApiKey(host: string, apikey: string, description: string, allowed_ips?: string[]): Promise<void | ApiKey | undefined>;
