import { CreateUsersController } from './CreateUsersControlle';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import createConnection from '../database'

describe('CreateUserController', () => {
    it('should return user id!', async () => {
        await createConnection()
        const createUserController = new CreateUsersController();
        const request = {
            body: {
                name: 'test user',
                email: 'email@teste.com'
            }
        }as Request;
        const response = makeMockResponse();
        const result = await createUserController.handle(request, response);

        console.log(result)
    })
})
