import { makeMockResponse } from '../utils/mocks/mockResponse';
import { FakeData } from '../utils/FakeData';
import createConnection from '../database';
import { getConnection } from 'typeorm';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { DeleteUserController } from './DeleteUserController';

describe('DeleteUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.close();
    });

    const fakeData = new FakeData();

    it('should return status 204 when the user is deleted!', async () => {
        const mockUser = await fakeData.createUser();
        const deleteUserController = new DeleteUserController();
        const request = makeMockRequest({
            params: {
                id: mockUser.id
            }
        });
        const response = makeMockResponse();

        await deleteUserController.handle(request, response);

        expect(response.state.status).toBe(204)
    });
});
