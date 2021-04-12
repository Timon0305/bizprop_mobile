import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessorRoutes } from './lessor-routing.module';
import { IonicModule } from '@ionic/angular';
import { LessorPage } from './lessor.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        LessorRoutes
    ],
    declarations: [
        LessorPage
    ],
})
export class LessorModule { }
