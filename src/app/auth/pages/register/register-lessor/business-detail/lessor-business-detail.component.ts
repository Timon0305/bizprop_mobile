import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import {
    addError,
    GenericValidator,
    getFirstErrorFromControl,
    markAsTouchDeep,
    touchedControlHasError,
} from 'ng-form-validator-builder';

import { scrollToInvalidFormItem } from '../../../../../shared/inputs/form-utils';

@Component({
    selector: 'app-lessor-business-detail',
    templateUrl: './lessor-business-detail.component.html',
})
export class StepTwoComponent implements OnInit {

    form: FormGroup;
    additionalInfo: boolean = false;

    constructor(private readonly router: Router) {
        this.initializeForm();
    }

    ngOnInit(): void { }

    get addressForm(): FormGroup {
        return this.form.controls['address'] as FormGroup;
    }


    get hasAddressError(): boolean {
        return touchedControlHasError(this.addressForm);
    }

    get firstAddressError(): string {
        return getFirstErrorFromControl(this.addressForm);
    }

    public register(): void {
        if (this.form.invalid) {
            markAsTouchDeep(this.form);
            scrollToInvalidFormItem(this.form);
            return;
        }

        this.router.navigateByUrl('/auth/verify');
    }

    private initializeForm(): void {
        this.form = new FormBuilder().group({
            name: ['', GenericValidator.isRequired('Business name is required')],
            mapAddress: ['', [GenericValidator.isRequired('Business Address is required')]],
            address: new FormBuilder().group({
                address1: [''],
                address2: [''],
                address3: ['']
            }, { validator: this.atLeastOneValidator(GenericValidator.isRequired('At least one address is required')) }),
            password: ['', [GenericValidator.isRequired('Password is required')]],
            confirmPassword: ['', [GenericValidator.isRequired('Password is required')]]
        }, { validators: this.validateForm() });
    }

    private validateForm(): ValidationErrors {
        return (group: FormGroup): ValidationErrors => {
            const passwordControl = group.controls['password'];
            const passwordConfirmControl = group.controls['confirmPassword'];

            if (passwordControl.value !== passwordConfirmControl.value) {
                addError(passwordConfirmControl, 'passwordMismatch', 'Passwords do not match');
            }

            return null;
        };
    }

    private atLeastOneValidator = (validator: ValidatorFn | ValidatorFn[]) => (group: FormGroup): ValidationErrors | null => {

        const runValidators = (control: AbstractControl): ValidationErrors => {
            if (Array.isArray(validator)) {

                // eslint-disable-next-line @typescript-eslint/prefer-for-of
                for (let index = 0; index < validator.length; index++) {
                    const errors = validator[index](control);
                    if (errors) {
                        return errors;
                    }
                }
            } else {
                return validator(control);
            }
        };

        const hasAtLeastOne =
            group &&
            group.controls &&
            Object.keys(group.controls).some(key => !runValidators(group.controls[key]));

        return hasAtLeastOne ? null : { atLeastOne: true };
    };
}
