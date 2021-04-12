import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { UserType } from '../shared/models/user/user-type';
import { CachingService } from '../shared/services/caching.service';
import { AuthActions } from './action-types';

@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(AuthActions.loginAction),
                tap(action => {
                    this.cache.set('user', action.user);

                    this.router.navigateByUrl(action.user.type === UserType.client ? '/client/home' : '/lessor/home');
                })
            )
        // This side effect does not want to dispatch another action to the store
        , { dispatch: false });

    logout$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(AuthActions.logoutAction),
                tap(action => {
                    this.cache.remove('user');
                    this.router.navigate(['auth', 'login']);
                })
            )
        , { dispatch: false });

    constructor(private readonly actions$: Actions,
        private readonly router: Router,
        private readonly cache: CachingService) {

    }

}
