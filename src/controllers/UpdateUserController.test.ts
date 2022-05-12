import { Request } from 'express';
import { getConnection } from 'typeorm';
import createConnection from '../database';
import { UpdateUserController } from './UpdateUserController';
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

    it('should return status 204 when to edit user!', async () => {
        const mocUser = await fakeData.createUser();
        const updateUserController = new UpdateUserController();
        const request = {
            body: {
                id: mocUser.id,
                name: 'Julia',
                surname: 'Parente',
                contractedCovid: 'false',
                email: 'juliaparente@gmail.com'
            }
        } as Request;

        const response = makeMockResponse();

        await updateUserController.handle(request, response);

        expect(response.state.status).toBe(204);
    });
});
