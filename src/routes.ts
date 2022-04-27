import { Router, Request, Response } from 'express';
import { CreteUserController } from './controllers/CreateUserControlle';

const router = Router();
const creteUserController = new CreteUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Test...' })
});

router.get('/user', creteUserController.handler);

export { router }
