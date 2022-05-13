import { Router, Request, Response } from 'express';
import { CreateUsersController } from './controllers/CreateUsersControlle';
import { UpdateUserController } from './controllers/UpdateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { GetUserController } from './controllers/GetUserController';

const router = Router();
const createUserController = new CreateUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const getAllUserController = new GetAllUserController();
const getUserController = new GetUserController();

/* Rota raiz da API */
router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Test...' });
});

/* Rota de adição de usuarios */
router.post('/users', createUserController.handle);

/* Rota de edição de usuarios */
router.patch('/user', updateUserController.handle);

/* Rota de deleção de usuarios */
router.delete('/user/:id', deleteUserController.handle);

/* Rota de busca de todos os usuarios */
router.get('/users', getAllUserController.handle);

/* Rota de busca de usuarios por id, nome, sobrenome, contraído covid e email*/
router.get('/user', getUserController.handle);

export { router };
