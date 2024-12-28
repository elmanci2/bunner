export interface BunnarConfig {
    name: string;
    version: string;
    description: string;
    author: string;
    license: string;
    repository: string;
    keywords: string[];
    bin: {
        [key: string]: string;
    };
    dependencies: {
        [key: string]: string;
    };
}

export interface ServerConfig {
    port: number;
    host: string;
}