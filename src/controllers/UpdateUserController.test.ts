import { UpdateUserController } from './UpdateUserController';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { FakeData } from '../utils/FakeData';
import createConnection from '../database';
import { getConnection } from 'typeorm';

describe('UpdateUserController', () => {
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

    it('should return status 204 when to edit user!', async () => {
        const mocUser = await fakeData.createUser();
        const updateUserController = new UpdateUserController();
        const request = {
            body: {
                id: mocUser.id,
                name: 'Julia',
                email: 'julia@gmail.com'
            }
        } as Request;

        const response = makeMockResponse();

        await updateUserController.handle(request, response);

        expect(response.state.status).toBe(204);
    });
});
