import { createAction, props } from '@ngrx/store';
import { User } from '../shared/models/user/user';

export const loginAction = createAction(
    '[Login Page] User Login',
    props<{ user: User }>()
);

// TODO: Need to create user/lessor logout actions
export const logoutAction = createAction(
    '[Side Menu] User Logout',
);
