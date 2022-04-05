import { Backup } from "./../Objects/Backup.js";
declare function GetBackup(host: string, apikey: string, identifier: string, uuid: string): Promise<void | Backup>;
export { GetBackup };
