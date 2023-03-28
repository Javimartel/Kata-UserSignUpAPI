export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    save(email: string) {
        if (email !== '') {
            this.userRepository.save(email);
        }
    }

    getUsers() {
        return this.userRepository.getUsers();
    }
}

export class FakeDatabase implements UserRepository {
    private users = [];

    save(email: string) {
        this.users.push(email);
    }

    getUsers() {
        return this.users;
    }
}

interface UserRepository {
    save(email: string): void;
    getUsers(): string[];
}
