import { Backup } from "./../Objects/Backup.js";
export declare function GetBackups(host: string, apikey: string, identifier: string): Promise<void | Backup[]>;
