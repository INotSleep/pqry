import { Backup } from "./../Objects/Backup.js";
declare function CreateBackup(host: string, apikey: string, identifier: string): Promise<void | Backup>;
export { CreateBackup };
