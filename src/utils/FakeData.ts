import { v4 as uuid } from 'uuid';
import { CreateUsersService } from '../services/CreateUsersService';

class FakeData {
    createUserService = new CreateUsersService();

    async execute() {
        await this.createUserService.execute({
            id: uuid(),
            name: 'Alberto',
            surname: 'Parente',
            contractedCovid: "true",
            email: 'albertoparentefh@gmail.com'
        });

        await this.createUserService.execute({
            id: uuid(),
            name: 'Juliana',
            surname: 'Parente',
            contractedCovid: "true",
            email: 'julianacavalcante2014@gmail.com'
        });

        await this.createUserService.execute({
            id: uuid(),
            name: 'Julia',
            surname: 'Parente',
            contractedCovid: "false",
            email: 'juliaparente@gmail.com'
        });
    };

    async createUser() {
        const user = await this.createUserService.execute({
            id: uuid(),
            name: 'Alberto',
            surname: 'Parente',
            contractedCovid: "true",
            email: 'albertoparentefh@gmail.com'
        });

        return user;
    };
};

export { FakeData };
