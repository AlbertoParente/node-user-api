import { Request, Response } from 'express';
import { GetUserService } from '../services/GetUserService';

class GetUserController {
    async handle(request: Request, response: Response) {
        const getUserService = new GetUserService();
        const { id, name, surname, contractedCovid, email } = request.body;
        await getUserService.executeSearchId({ id });
        await getUserService.executeSearchName({ name });
        await getUserService.executeSearchSurname({ surname });
        await getUserService.executeSearchContractedCovid({ contractedCovid });
        await getUserService.executeSearchEmail({ email });
        await getUserService.executeSearchFilter({ id, name, surname, contractedCovid, email });
        return response.status(200).json();
    };
};

export { GetUserController };
