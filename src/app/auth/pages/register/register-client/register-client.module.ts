import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterClientPageRoutingModule } from './register-client-routing.module';

import { RegisterClientPage } from './register-client.page';
import { TermsOfServiceModule } from '../../../components/terms-of-service/terms-of-service.module';
import { HeadingSectionModule } from '../../../../shared/heading-logo/heading-logo.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,

        RegisterClientPageRoutingModule,
        TermsOfServiceModule,
        HeadingSectionModule,
        SharedModule
    ],
    declarations: [RegisterClientPage]
})
export class RegisterClientPageModule { }
