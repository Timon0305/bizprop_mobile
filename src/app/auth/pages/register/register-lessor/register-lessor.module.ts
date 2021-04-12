import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BizInputsModule } from '../../../../shared/inputs/inputs.module';
import { MapSelectorModule } from '../../../../shared/map-selector/map-selector.module';

import { StepperModule } from '../../../../shared/stepper/stepper.module';
import { HeadingSectionModule } from '../../../../shared/heading-logo/heading-logo.module';
import { TermsOfServiceModule } from '../../../components/terms-of-service/terms-of-service.module';
import { StepTwoComponent } from './business-detail/lessor-business-detail.component';
import { StepOneComponent } from './personal-detail/lessor-personal-detail.component';
import { RegisterLessorPageRoutingModule } from './register-lessor-routing.module';
import { RegisterLessorPage } from './register-lessor.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,

        RegisterLessorPageRoutingModule,
        HeadingSectionModule,
        StepperModule,
        BizInputsModule,
        TermsOfServiceModule,
        MapSelectorModule,
    ],
    declarations: [
        RegisterLessorPage,
        StepOneComponent,
        StepTwoComponent
    ]
})
export class RegisterLessorPageModule { }
