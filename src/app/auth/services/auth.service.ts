import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppState } from '../../reducers';
import { User } from '../../shared/models/user/user';
import { UserType } from '../../shared/models/user/user-type';
import { CachingService } from '../../shared/services/caching.service';
import { loginAction, logoutAction } from '../auth.actions';
import { isLoggedInSelector } from '../auth.selectors';
import { USER_DATA } from './data/login-data';

// This whole class needs to be reworked when the actual auth is in place. 
// This implementation is just for demo purposes.
@Injectable()
export class AuthService {
    public user: User;

    constructor(private readonly cache: CachingService,
        private readonly store: Store<AppState>,
        private readonly router: Router) {
        this.user = this.getNewUser();

        this.subscribeToAuthStore();
    }

    login(username: string, password: string): Observable<User> {
        return new Observable(observer => {

            // simulate the passage of time
            setTimeout(() => {
                const user: User = USER_DATA.find(persistedUser =>
                    persistedUser.email?.toLowerCase() === username?.toLowerCase() &&
                    persistedUser.password === password);

                this.store.dispatch(loginAction({ user: user }));
                observer.next(user);
            }, 1500);
        });
    }

    logout(): void {
        this.store.dispatch(logoutAction());
    }

    private getNewUser(): User {
        const result = this.user || this.cache.get('user') || new User();
        return result;
    }

    private subscribeToAuthStore(): void {

        this.store.pipe(
            select(isLoggedInSelector),
            // As a side-effect, route to the login page when the user is logged out. 
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigate(['auth', 'login']);
                }
            }),
        ).subscribe();
    }
}
