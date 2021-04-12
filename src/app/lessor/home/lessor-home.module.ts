import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessorPageRoutingModule } from './lessor-home-routing.module';

import { LessorHomePage } from './lessor-home.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LessorPageRoutingModule,

        SharedModule
    ],
    declarations: [LessorHomePage]
})
export class LessorHomePageModule { }
