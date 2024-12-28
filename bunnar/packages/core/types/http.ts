
type RoutesType = {
    path: string;
    method: string;
    middleware: Function[];
    description: string;
    handler: (req: Request, res: ResponseType) => void;
}

type RoutesList = RoutesType[];

export type { RoutesType  , RoutesList };