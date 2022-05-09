import { getRepository } from 'typeorm';
import { User } from '../entities/User';

// interface IUser {
//     id: string;
//     name: string;
//     surname: string;
//     contractedCovid: string;
//     email: string;
// };

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
    async executeSearchId({ id }: IUserId) {
        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("id = :id", { id })
            .execute();

        console.log(user);
        return user;
    };

    async executeSearchName({ name }: IUserName) {
        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("name = :name", { name })
            .execute();

        console.log(user);
        return user;
    };

    async executeSearchSurname({ surname }: IUserSurname) {
        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("surname = :surname", { surname })
            .execute();

        console.log(user);
        return user;
    };

    async executeSearchContractCovid({ contractedCovid }: IUserContractedCovid) {
        const user = await getRepository(User)
            .createQueryBuilder()
            .select()
            .where("contractedCovid = :contractedCovid", { contractedCovid })
            .execute();

        console.log(user);
        return user;
    };

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

export { GetUserService }
