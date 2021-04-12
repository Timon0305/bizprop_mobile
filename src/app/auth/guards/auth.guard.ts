import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppState } from '../../reducers';
import { isLoggedInSelector } from '../auth.selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
    constructor(
        private readonly router: Router,
        private readonly store: Store<AppState>) {

    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkLogin();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkLogin();
    }

    checkLogin(): Observable<boolean> {
        // Check to see if the user exists on the auth state on the store.
        return this.store.pipe(
            select(isLoggedInSelector),
            // As a side-effect, route to the login page when the user is logged out. 
            tap(loggedIn => {
                console.log('AuthGuard updated', loggedIn);
                if (!loggedIn) {
                    this.router.navigate(['auth', 'login']);
                }
            })
        );
    }
}
