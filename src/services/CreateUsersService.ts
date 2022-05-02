import { getRepository } from 'typeorm';
import { User } from '../entities/User';
interface IdUser {
    id: string,
    name: string,
    email?: string
};

class CreateUsersService {
    async execute({ id, name, email }: IdUser) {
        const user = await getRepository(User)
            .createQueryBuilder("user")
            .insert()
            .into(User)
            .values([
                {
                    id: id,
                    name: name,
                    email: email
                }
            ])
            .execute();
        console.log(user)
        return user
    };
};

export { CreateUsersService };
