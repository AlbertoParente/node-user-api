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

/* Rota raiz da API */
router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Test...' })
});

/* Rota de busca de todos os usuarios */
router.get('/v1/users', getAllUserController.handle);

/* Rota de adição de usuarios */
router.post('/v1/users', createUserController.handle);

/* Rota de edição de usuarios */
router.patch('/v1/user', updateUserController.handle);

/* Rota de deleção de usuarios */
router.delete('/v1/user/:id', deleteUserController.handle);

/* Rota de busca de usuarios por id, nome, sobrenome, contraído covid e email*/
router.get('/v1/user', getUserController.handle);

export { router }
