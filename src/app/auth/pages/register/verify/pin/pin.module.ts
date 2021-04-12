import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PinComponent } from './pin.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        PinComponent,
    ],
    exports: [
        PinComponent
    ]
})
export class VerifyPinModule {

}
