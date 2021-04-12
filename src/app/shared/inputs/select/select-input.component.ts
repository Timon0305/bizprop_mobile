import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { AlertController, IonSelect } from '@ionic/angular';
import { isNullOrUndefined } from 'util';

import { InputBase } from '../input-base';
import { SelectOptions } from './select-option';

@Component({
    selector: 'app-select-input',
    templateUrl: './select-input.component.html'
})
export class SelectInputComponent extends InputBase implements OnInit, AfterViewInit, OnChanges {
    @Input() multiSelect: boolean = false;
    @Input() options: SelectOptions = [];
    @Input() icon: string = 'fas fa-chevron-down';

    @ViewChild('select') select: IonSelect;

    value: string = '';

    get selectedValues(): string[] {
        return this.options
            .filter(option => option.selected)
            .map(option => option.value);
    }

    get containsText(): boolean {
        return this.value !== '';
    }

    constructor() {
        super();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);
        this.handleOptionsChanges(changes);
    }

    handleOptionsChanges(changes: SimpleChanges): void {
        const change: SimpleChange = changes['options'];
        if (!isNullOrUndefined(change) && !change.firstChange) {
            const value: SelectOptions = change.currentValue;
            if (!isNullOrUndefined(value)) {
                // Break the reference
                this.options = [...value];
                this.setValueFromFormControl();
            }
        }
    }

    public ngOnInit(): void {
        this.runChecks();

        // Break the reference here.
        this.options = [...this.options];
        this.checkForCorrectFormControlType();
    }

    public ngAfterViewInit(): void {
        super.ngAfterViewInit();

        this.setValueFromFormControl();
    }

    open(ionSelect: IonSelect): void {

        ionSelect.open()
            .then((alert: HTMLIonAlertElement) => {
                // Had to dig in the source code for this...
                // https://github.com/ionic-team/ionic-framework/blob/14e8441706c230da4669afaaf0028aaeaf4dbe0e/core/src/components/alert/alert.tsx#L291
                alert.onWillDismiss().then(() => {
                    this.formControl.markAsTouched();
                });
            });

        const change = ionSelect.ionChange.subscribe((event: CustomEvent) => {
            const values: string[] = event.detail.value;

            // Set the value to the dispaly values of the selected items.
            this.value = this.options
                .filter((option) => values.includes(option.value))
                .map(option => option.display)
                .join(', ');

            // Apply the selected states to the options.
            this.options.forEach(option => option.selected = false);
            this.options.filter(option => values.includes(option.value)).forEach(option => option.selected = true);

            // Apply the updated stat to the formControl values.
            this.formControl.setValue(new FormArray(this.options.map(type => new FormControl(type.selected))));

            this.formControl.markAsTouched();

            change.unsubscribe();
        });
    }

    private setValueFromFormControl() {
        this.value = this.options
            .filter(option => option.selected)
            .map(option => option.display)
            .join(', ');

        const actualValues = this.options
            .filter(option => option.selected)
            .map(option => option.value);

        this.select.value = actualValues;
    }

    private checkForCorrectFormControlType() {
        if (!(this.formControl.value instanceof FormArray)) {
            console.error('The FormControl bound to the Select Input`s value needs to be of type FormArray.');
        }
    }
}
