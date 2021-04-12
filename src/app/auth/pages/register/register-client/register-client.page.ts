import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { addError, GenericValidator, markAsTouchDeep, StringValidator } from 'ng-form-validator-builder';
import { scrollToInvalidFormItem } from '../../../../shared/inputs/form-utils';

@Component({
    selector: 'app-register-client',
    templateUrl: './register-client.page.html',
    styleUrls: ['./register-client.page.scss'],
})
export class RegisterClientPage implements OnInit {

    form: FormGroup;

    constructor(private readonly router: Router) {
        this.initializeForm();
    }

    ngOnInit(): void {
    }

    public register(): void {
        if (this.form.invalid) {
            markAsTouchDeep(this.form);
            scrollToInvalidFormItem(this.form);
            return;
        }

        this.router.navigateByUrl('/auth/verify');
    }

    private initializeForm() {
        this.form = new FormBuilder().group({
            name: ['', [GenericValidator.isRequired('Name is required')]],
            email: ['', [
                GenericValidator.isRequired('Email is required'),
                StringValidator.email('Valid email is required')
            ]],
            contact1: ['', [GenericValidator.isRequired('Contact number is required')]],
            contact2: ['', []],
            password: ['', [GenericValidator.isRequired('Password is required')]],
            confirmPassword: ['', [
                GenericValidator.isRequired('Password is required')
            ]],
        }, { validator: this.validateForm() });
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

}
