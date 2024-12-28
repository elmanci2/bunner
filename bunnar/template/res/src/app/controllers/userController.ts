import { User } from "../entities/user";

class userController {
    private userCase: any;

    constructor(userCase: any) {
        this.userCase = userCase;
    }

    async findAll(req: any, res: any) {
        const users = await this.userCase.findAll();
        return res.json(users);
    }

    async findById(req: any, res: any) {
        const { id } = req.params;
        const user = await this.userCase.findById(id);
        return res.json(user);
    }

    async create(req: any, res: any) {
        const { name, email, role } = req.body;
        const user = await this.userCase.create(new User(0, name, email, role));
        return res.json(user);
    }

    async update(req: any, res: any) {
        const { id } = req.params;
        const { name, email, role } = req.body;
        const user = await this.userCase.update(new User(id, name, email, role));
        return res.json(user);
    }

    async delete(req: any, res: any) {
        const { id } = req.params;
        await this.userCase.delete(id);
        return res.json({ message: 'User deleted successfully' });
    }


}


export { userController };
