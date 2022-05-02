import { Request, Response } from 'express';
import { CreateUsersService } from '../services/CreateUsersService'
import { v4 as uuid} from 'uuid';

class CreateUsersController {
    async handle(request: Request, response: Response) {

        const createUserService = new CreateUsersService();
        const name = request.body.name;
        const email = request.body.email;
        const id = uuid();

        if (name.length === 0) {
            return response.status(400).json({ message: 'Inform all fields!' });
        }

        const user = await createUserService.execute({ id, name, email });

        return response.status(201).json({ user });
    }
}

export { CreateUsersController }
