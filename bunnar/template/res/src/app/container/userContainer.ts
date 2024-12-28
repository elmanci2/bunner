import Sufry from "bunnar-sufry";
import { UserCase } from "../useCases/userCase";
import { UserRepository } from "../repository/userRepository";
import { userController } from "../controllers/userController";


const db = [
    { name: "John Doe", email: "john.doe@example.com", role: "user", id: 1 },
    { name: "leo", email: "leo@example.com", role: "admin", id: 2 },
    { name: "john", email: "john@example.com", role: "admin", id: 3 },
]

const container = new Sufry({
    UserRepository: { args: [db], factory: UserRepository },
    UserCase: { inject: ["UserRepository"], factory: UserCase },
    userController: { inject: ["UserCase"], factory: userController },
});

export { container };