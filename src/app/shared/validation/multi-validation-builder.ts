/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FormArray, ValidationErrors } from '@angular/forms';
import { IValidationBuilder, ValidationBuilder } from 'ng-form-validator-builder';
import { isNullOrUndefined } from 'util';

export class MultiSelectValidationBuilder implements IValidationBuilder {
    get errors(): ValidationErrors {
        return this.builder.baseErrors;
    }

    get value(): any {
        return this.builder.value;
    }
    set value(val: any) {
        if (val !== this.builder.value) {
            this.builder.value = val;
        }
    }
    constructor(private readonly builder: ValidationBuilder) { }

    ifTrue(callbackFn: (value: any) => boolean, errorKey: string, errorMessage: string): MultiSelectValidationBuilder {
        this.builder.ifTrue(callbackFn, errorKey, errorMessage);
        return this;
    }

    ifFalse(callbackFn: (value: any) => boolean, errorKey: string, errorMessage: string): MultiSelectValidationBuilder {
        this.builder.ifFalse(callbackFn, errorKey, errorMessage);
        return this;
    }

    isRequired(errorMessage: string = 'Need at least one selection'): MultiSelectValidationBuilder {
        const value: FormArray = this.value as FormArray;

        if (isNullOrUndefined(value) || value?.value?.length <= 0) {
            this.errors.required = errorMessage;
        } else {
            // in our case, the select component contains an array of boolean values - true if it is selected, otherwise false.
            const containsSelected = (value?.value as Array<boolean>).find(val => val === true);
            if (!containsSelected) {
                this.errors.required = errorMessage;
            }
        }

        return this;
    }

    withMessage(message: string, property?: string): MultiSelectValidationBuilder {
        this.builder.withMessage(message, property);
        return this;
    }

    ignoreWhen(callbackFn: (value: any) => boolean): MultiSelectValidationBuilder {
        this.builder.ignoreWhen(callbackFn);
        return this;
    }

    addErrors(): MultiSelectValidationBuilder {
        this.builder.addErrors();
        return this;
    }

    build(): ValidationErrors {
        return this.builder.build();
    }
}
