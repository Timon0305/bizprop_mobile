import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { isNullOrEmpty } from '../../extensions';

import { InputBase } from '../input-base';

declare const $: any;

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.css']
})
export class TextInputComponent extends InputBase implements OnInit, AfterViewInit {
    @Input() password: boolean = false;
    @Input() numeric: boolean = false;

    @Input() type: string = 'text';

    @ViewChild('inputElement') inputElement: ElementRef<HTMLInputElement>;

    get inputType(): string {
        if (this.password === true) {
            return 'password';
        }

        if (this.numeric === true) {
            return 'number';
        }

        return this.type || 'text';
    }

    get containsText(): boolean {
        return !isNullOrEmpty(this.formValue as string);
    }

    ngOnInit(): void {
        this.runChecks();
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();

        this.ensureNumericInput();
        this.inputElement.nativeElement.inputMode = this.inputType;
    }

    private ensureNumericInput() {
        if (this.numeric === true) {
            $('input[type=number]').numeric();
        }
    }

}
