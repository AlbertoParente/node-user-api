import { Request, Response } from 'express';
import { CreateUsersService } from '../services/CreateUsersService'
import { v4 as uuid } from 'uuid';

class CreateUsersController {
    async handle(request: Request, response: Response) {

        const createUserService = new CreateUsersService();
        const name = request.body.name;
        const surname = request.body.surname;
        const contractedCovid = request.body.contractedCovid;
        const email = request.body.email;
        const id = uuid();

        if (name.length === 0) {
            return response.status(400).json({ message: 'Name is required!' });
        }

        const user = await createUserService.execute({ id, name, surname, contractedCovid, email });

        return response.status(201).json(user);
    }
}

export { CreateUsersController }
