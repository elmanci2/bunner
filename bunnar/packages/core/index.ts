import type { ServerConfig } from "../../interface/config.type";
import { watch } from "chokidar";
import { Routing } from "./http/Routing";
import { SRC_DIR } from "../../utils/path";
import type { Server } from "bun";

/**
 * Core package of Bunnar
 * @module BunnarServer
 */
class BunnarServer {
    private config: ServerConfig;
    private serverInstance: Server | null = null; // Referencia al servidor actual

    constructor(config?: ServerConfig) {
        this.config = config || { port: 3000, host: "localhost" };
    }

    /**
     * Sets up a file watcher to restart the server on file changes.
     */
    private async setupWatcher() {
        const watcher = watch(SRC_DIR, { ignoreInitial: true });

        watcher.on("change", async (path) => {
            console.log(`🔄 File changed: ${path}. Restarting server...`);
            await this.restartServer();
        });

        watcher.on("error", (error) => {
            console.error("❌ Watcher encountered an error:", error);
        });
    }

    /**
     * Restarts the server by stopping the current instance and creating a new one.
     */
    private async restartServer() {
        if (this.serverInstance) {
            this.serverInstance.stop(); // Detiene el servidor actual
            console.log("🛑 Previous server stopped.");
        }
        await this.createServer(); // Crea un nuevo servidor
    }

    /**
     * Creates and starts the server.
     * @returns {Promise<void>}
     */
    async createServer() {
        const routing = new Routing(this.config);

        this.serverInstance = Bun.serve({
            ...this.config,
            fetch: (request) => {
                try {
                    return routing.startRouting(request);
                } catch (error) {
                    console.error("❌ Error handling request:", error);
                    return new Response("Internal Server Error", { status: 500 });
                }
            },
        });

        console.log(`🚀 Server initialized at http://${this.config.host}:${this.config.port}`);
    }

    /**
     * Starts the server and initializes file watching.
     */
    async startServer() {
        await this.createServer();
        await this.setupWatcher();
    }
}

export { BunnarServer };
