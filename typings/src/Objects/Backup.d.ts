declare class Backup {
    uuid: string;
    is_successful: boolean;
    is_locked: boolean;
    name: string;
    ignored_files: string[];
    checksum: string;
    bytes: number;
    created_at: string;
    completed_at: string;
    identifier: string;
    host: string;
    apikey: string;
    constructor(data: {
        uuid: string;
        is_successful: boolean;
        is_locked: boolean;
        name: string;
        ignored_files: string[];
        checksum: string;
        bytes: number;
        created_at: string;
        completed_at: string;
        identifier: string;
        host: string;
        apikey: string;
    });
    delete(): Promise<void>;
}
export { Backup };
