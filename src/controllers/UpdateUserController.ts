import { Request, Response } from 'express'
import { UpdateUserService } from '../services/UpdateUserServices';

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const updateUserService = new UpdateUserService();
        const { id, name, surname, contractedCovid, email } = request.body;

        if (id.length === 0) return response.status(400).json({ message: 'Id not informed!' });

        if (name.length === 0) return response.status(400).json({ message: 'Name not informed!' });

        if (surname.length === 0) return response.status(400).json({ message: 'surname not informed!' });

        await updateUserService.execute({ id, name, surname, contractedCovid, email });

        return response.status(204).json();
    };
};

export { UpdateUserController };
