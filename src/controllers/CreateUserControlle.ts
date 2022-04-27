import { Request, Response } from 'express';

class CreteUserController {
    handler(request: Request, response: Response) {
        return response.json([
            {
                name: 'Alberto Parente',
            },
            {
                name: 'Juliana Cavalcante',
            }
        ])

    }
}

export { CreteUserController }
