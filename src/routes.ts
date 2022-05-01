import { Router, Request, Response } from 'express';
import { CreateUsersController } from './controllers/CreateUsersControlle';

const router = Router();
const createUserController = new CreateUsersController();

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Test...' })
});

router.post('/user', createUserController.handle);

export { router }
