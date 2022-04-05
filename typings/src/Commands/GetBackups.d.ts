import { Backup } from "./../Objects/Backup.js";
declare function GetBackups(host: string, apikey: string, identifier: string): Promise<void | Backup[]>;
export { GetBackups };
