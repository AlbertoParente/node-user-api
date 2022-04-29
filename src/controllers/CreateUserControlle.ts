import { Request, Response } from 'express';

class CreteUserController {
    handle(request: Request, response: Response) {
        const name = request.body.name;
        const email = request.body.email;

        if(name.legth === 0) {
            return response.status(200).json({message: `User: ${name} and E-mail${email}`});
        }
        return response.status(400).json({message: `User: ${name} and E-mail${email}`});
    }
}

export { CreteUserController }
