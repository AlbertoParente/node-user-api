import { getRepository } from 'typeorm';
import { User } from '../entities/User';

class GetAllUserService {

    /* Methodo de busca todos os usuarios */
    async execute() {
        const users = await getRepository(User)
            .createQueryBuilder('users')
            .select()
            .getMany();

        console.log(users);
        return users;
    };
};

export { GetAllUserService }
