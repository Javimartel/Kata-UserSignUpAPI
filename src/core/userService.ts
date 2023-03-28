import { UserRepository } from './userRepository';

export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    save(email: string) {
        if (email !== '') {
            this.userRepository.save(email);
        } 
        
        if (email && !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            throw new Error(`"${email}" has incorrect format`);
        }
    }

    getUsers() {
        return this.userRepository.getUsers();
    }
}
