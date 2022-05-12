import { Request } from 'express';
import { getConnection } from 'typeorm';
import createConnection from '../database';
import { CreateUsersController } from './CreateUsersControlle';
import { makeMockResponse } from '../utils/mocks/mockResponse';

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
                surname: 'Parente',
                contractedCovid: true,
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
                surname: 'Teste surname',
                contractedCovid: true,
                email: 'email@teste.com'
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    });

    it('should return status 400 when the surname is not informed!', async () => {
        const request = {
            body: {
                name: 'Test name',
                surname: '',
                contractedCovid: true,
                email: 'email@teste.com'
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    });

    it('should return status 400 when the contractedCovid is not informed!', async () => {
        const request = {
            body: {
                name: 'Test name',
                surname: 'Test surname',
                contractedCovid: '',
                email: 'email@teste.com'
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    });

    it('should return status 201, when email not informed!', async () => {
        const request = {
            body: {
                name: 'test name',
                surname: 'test surname',
                contractedCovid: true,
                email: ''
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201);
    });
});
