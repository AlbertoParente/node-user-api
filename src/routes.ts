import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserControlle';

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Test...' })
});

router.post('/user', createUserController.handle);

export { router }
