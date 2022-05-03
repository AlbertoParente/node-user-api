import { getConnection } from 'typeorm';
import { v4 as uuid } from 'uuid';
import createConnection from '../database';
import { GetAllUserService } from './GetAllUserService'
import { CreateUsersService } from './CreateUsersService';

describe('GetAllUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations;
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM users');
        await connection.close();
    });

    it('should return all registered users!', async () => {
        const createUserService = new CreateUsersService();

        await createUserService.execute({
            id: uuid(),
            name: 'Alberto Parente',
            email: 'albertoparentefh@gmail.com'
        });

        await createUserService.execute({
            id: uuid(),
            name: 'Juliana Cavalcante',
            email: 'julianacavalcante2014@gmail.com'
        });


        const expectedResponse = [
            {
                name: 'Alberto Parente',
                email: 'albertoparentefh@gmail.com'
            },
            {
                name: 'Juliana Cavalcante',
                email: 'julianacavalcante2014@gmail.com'
            }
        ]

        const getAllUserService = new GetAllUserService();
        const result = await getAllUserService.execute();
        expect(result).toMatchObject(expectedResponse);

    });
});
