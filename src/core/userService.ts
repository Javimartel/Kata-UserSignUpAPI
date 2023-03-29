import { UserRepository } from './userRepository';

export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    saveUserInRepositoryBy(email: string) {
        const emailIsNotEmpty = email !== '';
        this.validateFormatOf(email);

        if (emailIsNotEmpty) {
            this.userRepository.save(email);
        } 
    }

    private validateFormatOf(email: string) {
        const emailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const emailIsNotValid = email && !email.match(emailFormat);

        if (emailIsNotValid) {
            throw new Error(`"${email}" has incorrect format`);
        }
    }

    getUsersFromRepository() {
        return this.userRepository.getUsers();
    }
}
