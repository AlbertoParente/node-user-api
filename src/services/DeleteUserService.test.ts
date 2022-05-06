import createConnection from '../database';
import { getConnection } from 'typeorm';
import { FakeData } from '../utils/FakeData';
import { DeleteUserService } from './DeleteUserService'

describe('DeleteUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.close();
    });

    const fakeData = new FakeData();

    it('should return a empity array when the user is deleted!', async () => {
        const mockeUser = await fakeData.createUser();
        const deleteUserService = new DeleteUserService();
        const result = await deleteUserService.execute({ id: mockeUser.id });

        expect(result).toHaveLength(0);
    });
});
