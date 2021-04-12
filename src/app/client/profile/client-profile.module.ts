import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { ProfilePageRoutingModule } from './client-profile-routing.module';
import { ClientProfilePage } from './client-profile.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilePageRoutingModule,

        SharedModule
    ],
    declarations: [ClientProfilePage]
})
export class ClientProfilePageModule { }
