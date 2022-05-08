import { getRepository } from 'typeorm';
import { User } from '../entities/User';

interface IUser {
    id: string;
    name: string;
    surname: string;
    contractedCovid: boolean;
    email?: string;
};
class UpdateUserService {
    async execute({ id, name, surname, contractedCovid, email }: IUser) {
        const user = await getRepository(User)
            .createQueryBuilder("user")
            .update()
            .set({
                name: name,
                surname: surname,
                contractedCovid: contractedCovid,
                email: email
            })
            .where('id = :id', { id })
            .execute()

        console.log(user.raw);
        return user.raw;
    }
};

export { UpdateUserService };
