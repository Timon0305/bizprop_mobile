/* eslint-disable arrow-body-style */
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { User } from '../../shared/models/user/user';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
    user: User;
}

export const initialAuthState: AuthState = {
    user: undefined
};

/**
 * A reducer that defines the initial authentication state of our application and
 * it also defines what the store should do on a login action. 
 * It should save the user in the store so we can use this lateron. 
 * 
 * */

export const authReducer = createReducer(
    initialAuthState,

    // What to do in response to a specific action.

    // We want to create a new state for the Auth Store, when a login action is performed.
    // The output should be the new state of the AuthenticationState
    on(AuthActions.loginAction, (state, action): AuthState => {
        return {
            user: action.user
        };
    }),

    on(AuthActions.logoutAction, (state, action): AuthState => {
        return {
            user: undefined
        };
    })
);


// function authReducer(state, action): AuthState {

// }
