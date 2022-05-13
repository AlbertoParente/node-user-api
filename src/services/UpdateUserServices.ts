import { getRepository } from 'typeorm';
import { User } from '../entities/User';

interface IUser {
    id: string;
    name: string;
    surname: string;
    contractedCovid: string;
    email?: string;
};
class UpdateUserService {

    /* Methodo de edição de usuario por nome, sobrenome, se contraiu covid, e por email */
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
            .execute();

        return user.raw;
    };
};

export { UpdateUserService };
