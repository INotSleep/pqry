declare class Server {
    server_owner: boolean;
    identifier: string;
    internal_id: string;
    uuid: string;
    name: string;
    cpu2: string;
    node: string;
    nest_id: string;
    sftp_details: {
        ip: string;
        port: number;
    };
    description: string;
    limits: {
        memory: number;
        swap: number;
        disk: number;
        io: number;
        cpu: number;
        threads: number;
        oop_disabled: boolean;
    };
    invocation: string;
    docker_image: string;
    egg_features: string[];
    feature_limits: {
        databases: number;
        allocations: number;
        backups: number;
    };
    status: any;
    is_suspended: boolean;
    is_installing: boolean;
    is_transferring: boolean;
    allocations: any;
    host: string;
    apikey: string;
    constructor(data: {
        server_owner: boolean;
        identifier: string;
        internal_id: string;
        uuid: string;
        name: string;
        cpu2: string;
        node: string;
        nest_id: string;
        sftp_details: {
            ip: string;
            port: number;
        };
        description: string;
        limits: {
            memory: number;
            swap: number;
            disk: number;
            io: number;
            cpu: number;
            threads: number;
            oop_disabled: boolean;
        };
        invocation: string;
        docker_image: string;
        egg_features: string[];
        feature_limits: {
            databases: number;
            allocations: number;
            backups: number;
        };
        status: any;
        is_suspended: boolean;
        is_installing: boolean;
        is_transferring: boolean;
        allocations: any;
        host: string;
        apikey: string;
    });
    power: {
        start: () => Promise<string | void>;
        restart: () => Promise<string | void>;
        stop: () => Promise<string | void>;
        kill: () => Promise<string | void>;
    };
    sendCommand(command: string): Promise<string | void>;
    usage(): Promise<any>;
}
export { Server };
