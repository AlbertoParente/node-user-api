import { getConnection } from 'typeorm';
import createConnection from '../database';
import { GetUserService } from './GetUserService';
import { FakeData } from '../utils/FakeData';

describe('GetAllUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations;
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM users');
        await connection.close();
    });

    const fakeData = new FakeData();

    it('should return the user by id!', async () => {
        const getUserService = new GetUserService();
        const mockeUser = await fakeData.createUser();
        const result = await getUserService.executeSearchId(
            {
                id: mockeUser.id,
            }
        );

        console.log('resultado:', result);
        expect(result).toHaveLength(1);
    });

    it('should return the user by name!', async () => {
        const getUserService = new GetUserService();
        const result = await getUserService.executeSearchName(
            {
                name: 'Alberto'
            }
        );

        console.log('resultado:', result);
        expect(result).toHaveLength(1);
    });

    it('should return the user by surname!', async () => {
        const getUserService = new GetUserService();
        const result = await getUserService.executeSearchSurname(
            {
                surname: 'Parente'
            }
        );

        console.log('resultado:', result);
        expect(result).toHaveLength(1);
    });

    it('should return the user by contractedCovid!', async () => {
        const getUserService = new GetUserService();
        const result = await getUserService.executeSearchContractedCovid(
            {
                contractedCovid: 'true'
            }
        );

        console.log('resultado:', result);
        expect(result).toHaveLength(1);
    });

    it('should return the user by email!', async () => {
        const getUserService = new GetUserService();
        const result = await getUserService.executeSearchEmail(
            {
                email: 'albertoparentefh@gmail.com'
            }
        );

        console.log('resultado:', result);
        expect(result).toHaveLength(1);
    });
});
