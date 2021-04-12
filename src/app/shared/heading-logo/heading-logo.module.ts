import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeadingSectionComponent } from './heading-logo.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        HeadingSectionComponent
    ],
    exports: [
        HeadingSectionComponent
    ]
})
export class HeadingSectionModule {

}
