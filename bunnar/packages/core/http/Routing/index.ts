import type { ServerConfig } from "../../../../interface/config.type";
import { ROUTS_LIST } from "../../../../utils/path";
import type { RoutesType } from "../../types/http";

class Routing {
    config: ServerConfig;

    constructor(config: ServerConfig) {
        this.config = config;
    }

    private async routes() {
        const routes = await import(ROUTS_LIST);
        return routes.default;
    }

    private async Handler(req: Request) {
        const { method, url } = req;
        const routes = await this.routes();

        const server_url = `http://${this.config.host}:${this.config.port}`;

        const route = routes.find((route: RoutesType) => url?.replace(server_url, "") === route.path && method === route.method);

        if (route) {
            route.middleware.forEach((middleware: Function) => middleware(req, Response));
            const response = await route.handler(req, Response);
            return response;
        }

        return new Response("Not Found", { status: 404 });
    }

    public async startRouting(req: Request) {
        const response = await this.Handler(req);
        return response;
    }
}

export { Routing };
