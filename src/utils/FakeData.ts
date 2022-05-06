import { CreateUsersService } from '../services/CreateUsersService';
import { v4 as uuid } from 'uuid';

class FakeData {
    createUserService = new CreateUsersService();

    async execute() {
        await this.createUserService.execute({
            id: uuid(),
            name: 'Alberto Parente',
            email: 'albertoparentefh@gmail.com'
        });

        await this.createUserService.execute({
            id: uuid(),
            name: 'Juliana Cavalcante',
            email: 'julianacavalcante2014@gmail.com'
        });
    };

    async createUser() {
        const user = await this.createUserService.execute({
            id: uuid(),
            name: 'Alberto Parente',
            email: 'albertoparentefh@gmail.com'
        });

        return user;
    }
};

export { FakeData };
