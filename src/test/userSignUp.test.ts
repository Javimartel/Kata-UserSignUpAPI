import { FakeDatabase } from '../core/fakeDatabase';
import { UserService } from '../core/userService';

describe('User Sign Up Test', () => {

    let fakeDatabase;
    let service;
    let spy;

    beforeEach(() => {
        fakeDatabase = new FakeDatabase();
        service = new UserService(fakeDatabase);
        spy = jest.spyOn(service, 'saveUserInRepositoryBy');
    });

    it('should not add user if email is empty', () => {
        const email = '';
        service.saveUserInRepositoryBy(email);

        const users = service.getUsersFromRepository();

        expect(spy).toHaveBeenCalled();
        expect(users.length).toBe(0);
    });
    
    it('should throw error if email has incorrect format', () => {
        const email = 'email.com';
        
        expect(() => {
            service.saveUserInRepositoryBy(email);
        }).toThrow(`"${email}" has incorrect format`);
        expect(spy).toHaveBeenCalled();
    });

    it('should add user if email is correct', () => {
        const email = 'javi@gmail.com';
        service.saveUserInRepositoryBy(email);

        const users = service.getUsersFromRepository();

        expect(spy).toHaveBeenCalled();
        expect(users.length).toBe(1);
        expect(users[0]).toBe(email);
    });
});
