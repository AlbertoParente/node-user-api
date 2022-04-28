import { Request, Response } from 'express';

class CreteUserController {
    handler(request: Request, response: Response) {
        const name = request.body.name;
        const email = request.body.email;

        return response.json({ message: `User: ${name} and E-mail${email}` })
    }
}

export { CreteUserController }
