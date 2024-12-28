import type { RoutesList } from "bunnar-core/types/http";
import { container } from "../../app/container/userContainer";

const postRoutes: RoutesList = [
    {
        path: "/user",
        method: "POST",
        middleware: [],
        description: "Create user",
        handler: async (req, res) => {
            const userController = container.resolve("userController");
            return userController.create(req, res);
        }
    },
]

const putRoutes: RoutesList = [
    {
        path: "/user/:id",
        method: "PUT",
        middleware: [],
        description: "Update user",
        handler: async (req, res) => {
            const userController = container.resolve("userController");
            return userController.update(req, res);
        }
    },
]

const deleteRoutes: RoutesList = [
    {
        path: "/user/:id",
        method: "DELETE",
        middleware: [],
        description: "Delete user",
        handler: async (req, res) => {
            const userController = container.resolve("userController");
            return userController.delete(req, res);
        }
    }
]

const routesList: RoutesList = [
    {
        path: "/word",
        method: "GET",
        middleware: [],
        description: "Hello World",
        handler: async (req, res) => {
            return Response.json({ hello: "World" });
        }
    },
    // user

    {
        path: "/user",
        method: "GET",
        middleware: [],
        description: "Get all users",
        handler: async (req, res) => {
            const userController = container.resolve("userController");
            return userController.findAll(req, res);
        }
    },
    {
        path: "/user/:id",
        method: "GET",
        middleware: [],
        description: "Get user by id",
        handler: async (req, res) => {
            const userController = container.resolve("userController");
            return userController.findById(req, res);
        }
    },

    ...postRoutes,
    ...putRoutes,
    ...deleteRoutes,
];

export default routesList;