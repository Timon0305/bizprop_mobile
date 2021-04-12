import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { addError, GenericValidator, markAsTouchDeep, StringValidator } from 'ng-form-validator-builder';
import { scrollToInvalidFormItem } from '../../shared/inputs/form-utils';

@Component({
    selector: 'app-client-profile',
    templateUrl: './client-profile.page.html',
})
export class ClientProfilePage implements OnInit {

    form: FormGroup;

    constructor() {
        this.initializeForm();
    }

    ngOnInit(): void {
    }

    public save(): void {
        if (this.form.invalid) {
            markAsTouchDeep(this.form);
            scrollToInvalidFormItem(this.form);
            return;
        }

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
