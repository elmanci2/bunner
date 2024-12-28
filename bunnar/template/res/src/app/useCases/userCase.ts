import { User } from "../entities/user";

class UserCase {
    private userRepository: any;

    constructor(userRepository: any) {
        this.userRepository = userRepository;
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async findById(id: number): Promise<User | null> {
        return this.userRepository.findById(id);
    }

    async create(user: User): Promise<User> {
        return this.userRepository.create(user);
    }

    async update(user: User): Promise<User> {
        return this.userRepository.update(user);
    }

    async delete(id: number): Promise<void> {
        this.userRepository.delete(id);
    }
}

export { UserCase };