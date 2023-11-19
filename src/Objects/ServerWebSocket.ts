import { Server } from "./Server.js";
import WS from "ws";
import { EventEmitter } from "node:events";
export class ServerWebSocket extends EventEmitter {
    socket: WS | null | undefined;
    server: Server;
    autoExtend: boolean;
    closedSendedCommands: any[] = [];

    constructor(server: Server, autoExtend?: boolean) {
        super();
        this.server = server;
        this.autoExtend = !!autoExtend;
    }

    async auth() {
        const data: {
            token: string,
            socket: string
        } = await this.server.getWebSocketCredentials();
        
        this.socket = new WS(data.socket, [], {
            headers: {
                "Origin": this.server.host,
                "Referer": this.server.host
            }
        });

        this.socket.on("message", (message: any) => {
            this.emit("rawmessage", message.toString);
            message = JSON.parse(message.toString())
            let data = message.args ? message.args[0] : null
            switch(message.event) {
                case "stats": {
                    this.emit("stats", JSON.parse(data));
                    break;
                }
                case "console output": {
                    this.emit("log", data)
                    break;
                }
                case "token expiring": {
                    if (this.autoExtend) {
                        this.socket?.close()
                        this.auth();
                        return;
                    }
                    
                    this.emit("token_expiring");
                    break;
                }
                case "token expired": {
                    this.emit("token_expired");
                    break;
                }
                
                case "auth success": {
                    this.emit("open");
                    break;
                }
            }

        })

        this.socket.on("close", (code, message) => {
            this.emit("close", code, message);
            this.socket = null;
        })

        this.socket.on("error", (message) => {
            this.emit("error", (message));
            this.socket = null;
        })

        this.socket.on("open", () => {
            this.send({"event":"auth","args":[data.token]})
            this.emit("socket_open")
        })
        
    }

    send(message: any) {
        if (!this.socket) {
            this.closedSendedCommands.push(message)
            return;
        }

        if (typeof message != "string") message = JSON.stringify(message)
        this.socket.send(message);
    }

    sendCommand(command: string) {
        this.send({"event":"send command","args":[command]})
    }

    sendSignal(signal: string) {
        this.send({"event":"set state","args":[signal]})
    }

    requestLogs() {
        this.send({"event":"send logs","args":[null]})
    }

    requestStats() {
        this.send({"event":"send stats","args":[null]})
    }
}