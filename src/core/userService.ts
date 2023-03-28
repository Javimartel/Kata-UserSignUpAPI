import { UserRepository } from './userRepository';

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
