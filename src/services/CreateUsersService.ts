import { getRepository } from 'typeorm';
import { User } from '../entities/User';
interface IdUser {
    id: string,
    name: string,
    surname: string,
    contractedCovid: boolean,
    email?: string
};

class CreateUsersService {
    async execute({ id, name, surname, contractedCovid, email }: IdUser) {
        const user = await getRepository(User)
            .createQueryBuilder("user")
            .insert()
            .into(User)
            .values([
                {
                    id: id,
                    name: name,
                    surname: surname,
                    contractedCovid: contractedCovid,
                    email: email
                }
            ])
            .execute();
        return user.identifiers[0]
    };
};

export { CreateUsersService };
