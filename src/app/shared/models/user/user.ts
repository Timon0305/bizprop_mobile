import { UserType } from './user-type';

export class User {
    id: number;
    email: string;
    password: string;

    type: UserType = UserType.client;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}
