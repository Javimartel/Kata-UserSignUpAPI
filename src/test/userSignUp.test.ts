import { FakeDatabase } from '../core/fakeDataBase';

describe('User Sign Up Test', () => {
    it('should not add user if email is empty', () => {
        const database = new FakeDatabase();
        expect(database.save('')).toHaveBeenCalled();
    });
});
