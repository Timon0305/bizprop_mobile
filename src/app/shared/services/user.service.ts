import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { UserType } from '../models/user/user-type';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private currentUser: User = new User();

    constructor() { }

    // TODO: Provide more information here
    setUser(type: UserType): void {
        this.currentUser.type = type;
    }

    getUser(): User {
        return this.currentUser;
    }
}
