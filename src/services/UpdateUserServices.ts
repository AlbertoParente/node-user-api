import { EntityManager, getRepository } from 'typeorm';
import { User } from '../entities/User';

interface IUser {
    id: string;
    name: string;
    email?: string;
};
class UpdateUserService {
    async execute({ id, name, email }: IUser) {
        const user = await getRepository(User)
            .createQueryBuilder("user")
            .update()
            .set({
                name: name,
                email: email
            })
            .where('id = :id', { id })
            .execute()

        console.log(user.raw);
        return user.raw;
    }
};

export { UpdateUserService };
