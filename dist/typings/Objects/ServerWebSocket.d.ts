/// <reference types="node" />
import { Server } from "./Server.js";
import WS from "ws";
import { EventEmitter } from "node:events";
export declare class ServerWebSocket extends EventEmitter {
    socket: WS | null | undefined;
    server: Server;
    autoExtend: boolean;
    closedSendedCommands: any[];
    constructor(server: Server, autoExtend?: boolean);
    auth(): Promise<void>;
    send(message: any): void;
    sendCommand(command: string): void;
    sendSignal(signal: string): void;
    requestLogs(): void;
    requestStats(): void;
}
