
interface IdUser {
    name: string,
    email: string
};

class CreateUserService {
    execute({ name, email }: IdUser) {
        const data = [];

        data.push({ name, email });

        return data;
    };
};

export { CreateUserService };
