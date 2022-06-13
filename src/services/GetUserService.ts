import { getRepository } from 'typeorm';
import { User } from '../entities/User';

interface IUser {
    name: string;
    surname: string;
};

interface IUserId {
    id: string;
};

interface IUserName {
    name: string;
};

interface IUserSurname {
    surname: string;
};

interface IUserContractedCovid {
    contractedCovid: string;
};

interface IUserEmail {
    email: string;
};

class GetUserService {

    /* Methodo de busca de usuario por id */
    async executeSearchId({ id }: IUserId) {
        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("id = :id", { id })
            .execute();

        console.log(user);
        return user;
    };

    /* Methodo de busca de usuario por nome */
    async executeSearchName({ name }: IUserName) {
        console.warn("`GetUserService.executeSearchName` esta obsoleto. Use GetUserService.executeSearchNameOrSurname")

        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("name = :name", { name })
            .execute();

        console.log(user);
        return user;
    };

    /* Methodo de busca de usuario por sobrenome */
    async executeSearchSurname({ surname }: IUserSurname) {
        console.warn("`GetUserService.executeSearchSurname` esta absoleto. Use GetUserService.executeSearchNameOrSurname")

        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("surname = :surname", { surname })
            .execute();

        console.log(user);
        return user;
    };

    /* Methodo de busca de usuario por nome ou sobrenome */
    async executeSearchNameOrSurname({ name, surname }: IUser) {
        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("name = :name", { name })
            .orWhere("surname = :surname", {surname})
            .execute();

        return user;
    };

    /* Methodo de busca se usuario contraiu covid */
    async executeSearchContractedCovid({ contractedCovid }: IUserContractedCovid) {
        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("contractedCovid = :contractedCovid", { contractedCovid })
            .execute();

        console.log(user);
        return user;
    };

    /* Methodo de busca de usuario por email */
    async executeSearchEmail({ email }: IUserEmail) {
        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("email = :email", { email })
            .execute();

        console.log(user);
        return user;
    };
};

export { GetUserService };
