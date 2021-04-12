import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessorProfilePageRoutingModule } from './lessor-profile-routing.module';

import { LessorProfilePage } from './lessor-profile.page';
import { SharedModule } from '../../shared/shared.module';
import { MapSelectorModule } from '../../shared/map-selector/map-selector.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LessorProfilePageRoutingModule,

        SharedModule,
        MapSelectorModule
    ],
    declarations: [LessorProfilePage]
})
export class LessorProfilePageModule { }
