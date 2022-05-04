import { getConnection } from 'typeorm';
import { GetAllUserController } from './GetAllUserController';
import createConnection from '../database';
import { FakeData } from '../utils/FakeData';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { makeMockResponse } from '../utils/mocks/mockResponse';

describe('GetAllUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        connection.query('DELETE FROM users');
        connection.close;
    });

    const fakeData = new FakeData();

    it('should return status 200, when to get all users!', async () => {
        await fakeData.execute();

        const getAllUserController = new GetAllUserController();
        const request = makeMockRequest({});
        const response = makeMockResponse();

        await getAllUserController.handle(request, response);

        expect(response.state.status).toBe(200);
    });
});
