import { Request } from 'express';
import { getConnection } from 'typeorm';
import createConnection from '../database';
import { GetUserController } from './GetUserController';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { FakeData } from '../utils/FakeData';

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

    it('should return status 200 when to Search for user!', async () => {

        await fakeData.createUser();

        const getUserController = new GetUserController();
        const request = {
            body: {
                name: 'Julia',
            }
        } as Request;
        const response = makeMockResponse();

        await getUserController.handle(request, response);

        expect(response.state.status).toBe(200);
    });
});
