import { Request, Response } from 'express';
import { CreateUsersService } from '../services/CreateUsersService'

class CreateUsersController {
    handle(request: Request, response: Response) {

        const createUserService = new CreateUsersService();
        const name = request.body.name;
        const email = request.body.email;

        if (name.length === 0 || email.length === 0) {
            return response.status(400).json({ message: 'Inform all fields!' });
        }

        const user = createUserService.execute({ name, email });

        return response.status(200).json({ user });
    }
}

export { CreateUsersController }
