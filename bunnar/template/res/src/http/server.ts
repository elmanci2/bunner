import { BunnarServer } from "bunnar-core";

class Server {
    server: BunnarServer;
    constructor() {
        this.server = new BunnarServer({
            port: 4000,
            host: "localhost"
        });
    }

    async start() {
        await this.server.startServer();
    }
}



const server = new Server();

export { server };