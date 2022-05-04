import { CreateUsersService } from '../services/CreateUsersService';
import { v4 as uuid } from 'uuid';

class FakeData {
    async execute() {
        const createUserService = new CreateUsersService();

        await createUserService.execute({
            id: uuid(),
            name: 'Alberto Parente',
            email: 'albertoparentefh@gmail.com'
        });

        await createUserService.execute({
            id: uuid(),
            name: 'Juliana Cavalcante',
            email: 'julianacavalcante2014@gmail.com'
        });
    };
};

export { FakeData };
