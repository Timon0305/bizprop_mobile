import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPageRoutingModule } from './verify-routing.module';

import { VerifyPage } from './verify.page';
import { HeadingSectionModule } from '../../../../shared/heading-logo/heading-logo.module';
import { VerifyPinModule } from './pin/pin.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VerifyPageRoutingModule,
        HeadingSectionModule,
        VerifyPinModule
    ],
    declarations: [VerifyPage]
})
export class VerifyPageModule { }
