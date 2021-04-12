import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GenericValidator, markAsTouchDeep, StringValidator } from 'ng-form-validator-builder';

import { scrollToInvalidFormItem } from '../../../../../shared/inputs/form-utils';

@Component({
    selector: 'app-lessor-personal-detail',
    templateUrl: './lessor-personal-detail.component.html',
})
export class StepOneComponent implements OnInit {

    @Output() done: EventEmitter<void> = new EventEmitter<void>();

    form: FormGroup;

    constructor() {
        this.initializeForm();
    }

    ngOnInit(): void { }

    goToBusinessDetails(): void {
        if (this.form.invalid) {
            markAsTouchDeep(this.form);
            scrollToInvalidFormItem(this.form);
            return;
        }

        this.done.emit();
    }

    private initializeForm(): void {
        this.form = new FormBuilder().group({
            email: ['', [
                GenericValidator.isRequired('Email is required'),
                StringValidator.email('Valid email is required')
            ]],
            contact1: ['', [GenericValidator.isRequired('Contact number is required')]],
            contact2: ['', []]
        });
    }
}
