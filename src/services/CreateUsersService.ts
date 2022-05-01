
interface IdUser {
    name: string,
    email: string
};

class CreateUsersService {
    execute({ name, email }: IdUser) {
        const data = [];

        data.push({ name, email });

        return data;
    };
};

export { CreateUsersService };
