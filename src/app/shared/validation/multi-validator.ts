import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { CustomValidationBuilder } from './custom-validation-builder';


export class MultiValidator {
    public static isRequired(error: string = 'Required Field'): ValidatorFn {
        return (control: FormControl): ValidationErrors =>
            new CustomValidationBuilder(control)
                .multiSelect
                .isRequired(error)
                .build();
    }
}
