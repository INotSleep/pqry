declare class ApiKey {
    identifier: string;
    description: string;
    allowed_ips: string[];
    last_used_at: string;
    created_at: string;
    host: string;
    apikey: string;
    constructor(data: {
        identifier: string;
        description: string;
        allowed_ips: string[];
        last_used_at: string;
        created_at: string;
        host: string;
        apikey: string;
    });
    delete(): Promise<void>;
}
export { ApiKey };
