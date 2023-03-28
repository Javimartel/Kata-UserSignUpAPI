import { UserRepository } from './userRepository';

export class FakeDatabase implements UserRepository {
    private users = [];

    save(email: string) {
        this.users.push(email);
    }

    getUsers() {
        return this.users;
    }
}
