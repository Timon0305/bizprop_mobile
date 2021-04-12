import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { LessorSideMenuComponent } from './lessor-side-menu.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        LessorSideMenuComponent
    ],
    exports: [
        LessorSideMenuComponent
    ]
})
export class LessorSideMenuModule { }
