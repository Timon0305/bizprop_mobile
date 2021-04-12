import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessorAddPropertyPageRoutingModule } from './add-property-routing.module';

import { LessorAddPropertyPage } from './add-property.page';
import { SharedModule } from '../../shared/shared.module';
import { MapSelectorModule } from '../../shared/map-selector/map-selector.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,

        LessorAddPropertyPageRoutingModule,

        SharedModule,
        MapSelectorModule,
    ],
    declarations: [LessorAddPropertyPage]
})
export class LessorAddPropertyPageModule { }
