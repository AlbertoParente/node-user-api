import { UpdateUserService, UpdateUserService } from './UpdateUserServices';
import { FakeData } from '../utils/FakeData';
import createConnection from '../database';
import { getConnection } from 'typeorm';

describe('UpdateUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM users');
        await connection.close();
    });

    const fakeData = new FakeData();

    it('should edit the username!', async () => {
        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute();

        console.log(result);
    })
});
