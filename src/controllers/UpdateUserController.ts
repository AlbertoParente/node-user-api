import { Request, Response } from 'express'
import { UpdateUserService } from '../services/UpdateUserServices';

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const updateUserService = new UpdateUserService();
        const { id, name, email } = request.body;

        if (id.length === 0) return response.status(400).json({ mensagem: 'Id not informed!' });

        if (name.length === 0) return response.status(400).json({ mensagem: 'Name not informed!' });

        await updateUserService.execute({ id, name, email })

        return response.status(204);
    };
};

export { UpdateUserController };