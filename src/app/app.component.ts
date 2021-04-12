import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { loginAction } from './auth/auth.actions';

import { userSelector } from './auth/auth.selectors';
import { AppState } from './reducers';
import { User } from './shared/models/user/user';
import { UserType } from './shared/models/user/user-type';
import { CachingService } from './shared/services/caching.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    user$: Observable<User> = this.store.pipe(
        select(userSelector)
    );

    // eslint-disable-next-line @typescript-eslint/naming-convention
    UserType = UserType;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private readonly store: Store<AppState>,
        private readonly cache: CachingService,
    ) {
        this.initializeApp();
    }

    ngOnInit(): void {
        this.loginCachedUser();
    }

    private initializeApp(): void {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    private loginCachedUser(): void {
        const user: User = this.cache.get('user');

        if (!isNullOrUndefined(user)) {
            this.store.dispatch(loginAction({ user: user }));
        }
    }
}
