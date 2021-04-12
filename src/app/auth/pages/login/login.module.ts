import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { TermsOfServiceModule } from '../../components/terms-of-service/terms-of-service.module';
import { HeadingSectionModule } from '../../../shared/heading-logo/heading-logo.module';
import { BizInputsModule } from '../../../shared/inputs/inputs.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,

        LoginPageRoutingModule,

        TermsOfServiceModule,
        HeadingSectionModule,

        BizInputsModule,
    ],
    declarations: [LoginPage]
})
export class LoginPageModule { }
