import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { BizInputsModule } from '../inputs/inputs.module';
import { MapSelectorComponent } from './map-selector.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        BizInputsModule
    ],
    declarations: [
        MapSelectorComponent
    ],
    exports: [
        MapSelectorComponent
    ]
})
export class MapSelectorModule { }
