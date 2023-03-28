import { FakeDatabase } from '../core/fakeDatabase';
import { UserService } from '../core/userService';

describe('User Sign Up Test', () => {
    it('should not add user if email is empty', () => {
        const fakeDatabase = new FakeDatabase();
        const service = new UserService(fakeDatabase);
        const spy = jest.spyOn(service, 'save');
        service.save('');

        const users = service.getUsers();

        expect(spy).toHaveBeenCalled();
        expect(users.length).toBe(0);
    });
});
