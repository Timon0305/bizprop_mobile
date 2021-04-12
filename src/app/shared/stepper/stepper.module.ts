import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { StepBodyComponent } from './step-body.component';
import { StepItemComponent } from './step-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StepperComponent,
        StepItemComponent,
        StepBodyComponent
    ],
    exports: [
        StepperComponent,
        StepItemComponent,
        StepBodyComponent
    ]
})
export class StepperModule { }
