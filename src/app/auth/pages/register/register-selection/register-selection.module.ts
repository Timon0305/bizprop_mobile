import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSelectionPageRoutingModule } from './register-selection-routing.module';

import { RegisterSelectionPage } from './register-selection.page';
import { BizInputsModule } from '../../../../shared/inputs/inputs.module';
import { HeadingSectionModule } from '../../../../shared/heading-logo/heading-logo.module';
import { TermsOfServiceModule } from '../../../components/terms-of-service/terms-of-service.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,

        RegisterSelectionPageRoutingModule,
        BizInputsModule,
        HeadingSectionModule,
        TermsOfServiceModule,
    ],
    declarations: [RegisterSelectionPage]
})
export class RegisterSelectionPageModule { }
