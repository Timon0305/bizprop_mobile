import { User } from '../../../shared/models/user/user';
import { UserType } from '../../../shared/models/user/user-type';

export const USER_DATA: User[] = [
    // Client user
    new User({
        id: 1,
        email: 'test@client.com',
        password: '12345',
        type: UserType.client
    }),

    // Lessor user
    new User({
        id: 2,
        email: 'test@lessor.com',
        password: '12345',
        type: UserType.lessor
    })
];
