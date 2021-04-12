import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const TAB = 9;

@Component({
    selector: 'app-verify-pin',
    templateUrl: './pin.component.html',
})
export class PinComponent implements OnInit {
    @Input() submitId: string;

    @Output() pinChanged: EventEmitter<string> = new EventEmitter<string>();

    chars: string[] = new Array(5).fill('-');

    private get pin(): string {
        return this.chars.join('');
    }

    constructor() { }

    ngOnInit(): void { }

    public verify(event: KeyboardEvent, element: HTMLInputElement, index: number): boolean {
        if (event.shiftKey && event.keyCode === TAB) {
            this.focusPreviousElement(index);
            return this.preventBubbling(event);
        }

        if (event.keyCode === TAB) { // Tab key
            this.focusNextElement(index);
            return this.preventBubbling(event);
        }

        if (!this.isNumber(event.key) && (!event.shiftKey || event.keyCode === TAB || event.keyCode === 18)) {
            this.setValue(element, index, '');

            return this.preventBubbling(event);
        }
    }

    public change(event: KeyboardEvent, element: HTMLInputElement, index: number): boolean {

        if (this.isNumber(event.key)) {
            this.setValue(element, index, event.key);

            this.focusNextElement(index);

            // stop the text from filling in on the next element
            return this.preventBubbling(event);
        }

    }

    trackByFn(index: number): number {
        return index;
    }

    private isNumber(value: string): boolean {
        return /^\d*\-?\d*$/.test(value);
    }

    private setValue(element: HTMLInputElement, index: number, value: string): void {
        element.value = value;
        this.chars[index] = value;

        this.pinChanged.emit(this.pin);
    }

    private preventBubbling(event: Event): boolean {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    private focusPreviousElement(index: number): void {
        if (index !== 0) {
            const previousElement: HTMLInputElement = document.getElementById(`pin_${index - 1}`) as HTMLInputElement;
            previousElement.focus();
        }
    }

    private focusNextElement(index: number): void {
        if (index < this.chars.length - 1) {
            const nextElement: HTMLInputElement = document.getElementById(`pin_${index + 1}`) as HTMLInputElement;
            nextElement.focus();
        } else {
            const verifyButton: HTMLElement = document.getElementById(this.submitId);
            verifyButton.focus();
        }
    }
}
