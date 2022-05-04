import { getConnection } from 'typeorm';
import createConnection from '../database';
import { GetAllUserService } from './GetAllUserService'
import { FakeData } from '../utils/FakeData';

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

    const fakeData = new FakeData();

    it('should return all registered users!', async () => {

        await fakeData.execute();

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
