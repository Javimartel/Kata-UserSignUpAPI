import { UserRepository } from './userRepository';

export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    save(email: string) {
        const emailIsNotEmpty = email !== '';
        const emailIsNotValid = this.validateFormatOf(email);

        if (emailIsNotEmpty) {
            this.userRepository.save(email);
        } 
        
        if (emailIsNotValid) {
            throw new Error(`"${email}" has incorrect format`);
        }
    }

    private validateFormatOf(email: string) {
        const emailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
        return email && !email.match(emailFormat);
    }

    getUsers() {
        return this.userRepository.getUsers();
    }
}
