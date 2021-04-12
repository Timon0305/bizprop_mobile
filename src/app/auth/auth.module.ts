import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AuthRoutes } from './auth-routing';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
@NgModule({
    imports: [
        CommonModule,
        IonicModule,

        AuthRoutes,

        StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations: [
    ]
})
export class AuthModule {

    static forRoot(): ModuleWithProviders<AuthModule> {
        return {
            ngModule: AuthModule,
            providers: [
                { provide: AuthService }
            ]
        };
    }

}
