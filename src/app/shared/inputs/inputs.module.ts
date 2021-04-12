import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DateInputComponent } from './date/date-input.component';
import { PasswordComponent } from './password/password.component';
import { SelectInputComponent } from './select/select-input.component';
import { SelectPipe } from './select/select-pipe';
import { TextInputComponent } from './text-input/text-input.component';
import { MultilineComponent } from './text-multiline/multiline.component';
import { UploadComponent } from './upload/upload.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DateInputComponent,
        MultilineComponent,
        PasswordComponent,
        SelectInputComponent,
        SelectPipe,
        TextInputComponent,
        ToggleComponent,
        UploadComponent,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,

        DateInputComponent,
        MultilineComponent,
        PasswordComponent,
        SelectInputComponent,
        TextInputComponent,
        ToggleComponent,
        UploadComponent,
    ]
})
export class BizInputsModule {

}
