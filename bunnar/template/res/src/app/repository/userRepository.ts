import { User } from "../entities/user";

class UserRepository {
    private users: User[];

    constructor(users: User[]) {
        this.users = users;
    }

    findAll(): User[] {
        return this.users;
    }

    findById(id: number): User | null {
        return this.users.find(user => user.id === id) || null;
    }

    create(user: User): User {
        this.users.push(user);
        return user;
    }

    update(user: User): User {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
        return user;
    }

    delete(id: number): void {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }
}

export { UserRepository };