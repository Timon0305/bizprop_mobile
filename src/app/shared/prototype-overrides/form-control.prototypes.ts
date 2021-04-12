/* eslint-disable @typescript-eslint/no-this-alias */

import { FormControl } from '@angular/forms';

FormControl.prototype.getNativeElement = function (): HTMLElement {
    const target: FormControl = this;
    return target.nativeElement;
};

FormControl.prototype.setNativeElement = function (element: HTMLElement): void {
    const target: FormControl = this;
    target.nativeElement = element;
};
