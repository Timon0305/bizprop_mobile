/* eslint-disable @angular-eslint/directive-class-suffix */

import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getFirstErrorFromControl, touchedControlHasError } from 'ng-form-validator-builder';
import { isNullOrUndefined } from 'util';

import { Guid } from '../models/guid';

@Directive()
export class InputBase implements OnInit, AfterViewInit, OnChanges {
    

    @Input() form: FormGroup;
    @Input() name: string;

    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() iconClass: string = '';
    @Input() cssClasses: string[] = [];
    @Input() readonly: boolean = false;

    @ViewChild('contentElement') contentElement: ElementRef;

    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

    @Output() iconClick: EventEmitter<any> = new EventEmitter<any>();

    public get formControl(): FormControl {
        return this.form.controls[this.name] as FormControl;
    }

    public get nativeElement(): HTMLElement {
        return this.formControl.getNativeElement();
    }

    get firstError(): string {
        return getFirstErrorFromControl(this.formControl);
    }

    get hasError(): boolean {
        return touchedControlHasError(this.formControl);
    }

    get formValue(): string | FormArray {
        return this.formControl.value as string;
    }

    get iconClasses(): string[] {
        return ['biz-input-icon', ...this.cssClasses];
    }

    public id: string = Guid.shortGuid();

    public ngOnChanges(changes: SimpleChanges): void {
        this.handleFormChanges(changes);
    }

    public ngOnInit(): void {
        this.cssClasses.push(...this.iconClass.split(';'));
    }

    public ngAfterViewInit(): void {
        this.setElement();
    }

    public runChecks(): void {
        this.assertFormInput();
        this.assertNameInput();
        this.assertValidFormControl();
    }

    public onIconClick(event: Event): boolean {
        if (this.readonly) {
            event.stopPropagation();
            return false;
        }

        this.iconClick.emit(event);
    }

    private assertFormInput(): void {
        if (isNullOrUndefined(this.form)) {
            throw new Error('[Input Base] Cannot create dynamic input element without binding it to a FormGroup. Please supply a [form] input.');
        }
    }

    private assertNameInput(): void {
        if (isNullOrUndefined(this.name)) {
            throw new Error(`[Input Base] Cannot create dynamic input element without binding a name to the FormGroup. Please supply a [name] input, 
            corresponding to the name of the FormControl on the FormGroup.`);
        }
    }

    private assertValidFormControl() {
        if (isNullOrUndefined(this.formControl)) {
            throw new Error(`[Input Base] Cannot find FormControl '${this.name}' on the FormGroup`);
        }
    }

    private setElement(): void {
        if (!isNullOrUndefined(this.contentElement)) {
            this.formControl.setNativeElement(this.contentElement.nativeElement);
        }
    }

    private handleFormChanges(changes: SimpleChanges): void {
        const change: SimpleChange = changes['form'];
        if (!isNullOrUndefined(change) && !change.firstChange) {
            const value: FormGroup = change.currentValue;
            if (!isNullOrUndefined(value)) {
                this.setElement();
                this.runChecks();
            }
        }
    }
}
