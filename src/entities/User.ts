import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    contractedCovid: string;

    @Column()
    email: string;
}

export { User }
