declare function SendCommand(host: string, apikey: string, identifier: string, command: string): Promise<string | void>;
export { SendCommand };
