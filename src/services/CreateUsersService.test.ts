import { getConnection } from 'typeorm';
import { CreateUsersService } from './CreateUsersService';
import { v4 as uuid } from 'uuid';
import createConnection from '../database';

describe('CreateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM users');
        await connection.close();
    });

    it('should return user id created!', async () => {
        const createUsersService = new CreateUsersService;

        const result = await createUsersService.execute({
            id: uuid(),
            name: 'Alberto',
            surname: 'Parente',
            contractedCovid: "true",
            email: 'albertoparentefh@gmail.com'
        });

        console.log(result);

        expect(result).toHaveProperty('id');
    });
});
