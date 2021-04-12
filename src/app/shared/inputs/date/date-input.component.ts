import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

import { InputBase } from '../input-base';

@Component({
    selector: 'app-date-input',
    templateUrl: './date-input.component.html'
})
export class DateInputComponent extends InputBase implements OnInit {
    @Input() dateFormat: string = 'yyyy/MM/dd';

    get containsText(): boolean {
        return this.formValue !== '';
    }

    constructor() {
        super();
    }

    ngOnInit(): void {
        this.runChecks();
    }

    open(datePicker: IonDatetime): void {
        if (!this.readonly) {
            datePicker.open();
    
            const subscription = datePicker.ionChange.subscribe((event: CustomEvent) => {
                const date = event.detail.value;
                this.formControl.setValue(date);
    
                subscription.unsubscribe();
            });
        }
    }
}
