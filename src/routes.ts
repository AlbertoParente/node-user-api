import { Router, Request, Response } from 'express';
import { CreateUsersController } from './controllers/CreateUsersControlle';
import { GetAllUserController } from './controllers/GetAllUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const router = Router();
const createUserController = new CreateUsersController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Test...' })
});

router.post('/users', createUserController.handle);
router.get('/users', getAllUserController.handle);
router.patch('/user', updateUserController.handle);

export { router }
