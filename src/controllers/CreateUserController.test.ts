import { CreateUsersController } from './CreateUsersControlle';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import createConnection from '../database'
import { getConnection } from 'typeorm';

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

    const createUserController = new CreateUsersController();
    const response = makeMockResponse();

    it('should return status 201, when created user!', async () => {
        const request = {
            body: {
                name: 'test user',
                email: 'email@teste.com'
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201);
    });

    it('should return status 400 when the name is not informed!', async () => {
        const request = {
            body: {
                name: '',
                email: 'email@teste.com'
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    });

    it('should return status 201, when email not informed!', async () => {
        const request = {
            body: {
                name: 'test user',
                email: ''
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201);
    });
});
