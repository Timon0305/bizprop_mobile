import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';


// Feature Selector
// Makes it easier for us to write type-safe selectors
export const selectAuthState = createFeatureSelector<AuthState>('auth');



/**
 * A mapping function that can tae a bunch of inputs and
 * applies those inputs to an output
 */
// Memoised function. It keeps memory of previous executions, and only executes itself
// if the inputs of the function has not been calculated before.
export const isLoggedInSelector = createSelector(
    // state => state['auth'],
    // Use the Feature selector instead to have a type-safe selector.
    selectAuthState,
    (auth) => !!auth.user
);


export const isLoggedOutSelector = createSelector(
    // uses the isLoggedIn selector which returns a boolean, and negates that boolean.
    isLoggedInSelector,
    loggedIn => !loggedIn
);

export const userSelector = createSelector(
    selectAuthState,
    (auth) => auth.user
);
