import { FakeDatabase } from '../core/fakeDataBase';
import { UserService } from '../core/userService';

describe('User Sign Up Test', () => {
    it('should not add user if email is empty', () => {
        const fakeDataBase = new FakeDatabase();
        const service = new UserService(fakeDataBase);
        const spy = jest.spyOn(service, 'save');
        service.save('');

        const users = service.getUsers();

        expect(spy).toHaveBeenCalled();
        expect(users.length).toBe(0);
    });
});
