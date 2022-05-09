import { Router, Request, Response } from 'express';
import { CreateUsersController } from './controllers/CreateUsersControlle';
import { DeleteUserController } from './controllers/DeleteUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { GetUserController } from './controllers/GetUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const router = Router();
const createUserController = new CreateUsersController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const getUserController = new GetUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Test...' })
});

router.post('/users', createUserController.handle);
router.get('/users', getAllUserController.handle);
router.patch('/user', updateUserController.handle);
router.delete('/user/:id', deleteUserController.handle);
router.get('/user', getUserController.handle);

export { router }
