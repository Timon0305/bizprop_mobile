/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/member-ordering */

import { FormGroup, FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { scrollToElement } from '../scrolling-utils';

/* -------------------------------------------------------------------------- */
/*                                  Scrolling                                 */
/* -------------------------------------------------------------------------- */
export function scrollToInvalidFormItem(form: FormGroup): void {
    const invalidItem = findFirstInvalidControl(form);

    if (!isNullOrUndefined(invalidItem)) {
        scrollToInvalidItem(invalidItem);
    } else {
        console.warn('Cannot find an invalid item on the form - the actual form contans the error - not a form item.');
    }
}

function scrollToInvalidItem(control: FormControl): void {
    if (!isNullOrUndefined(control.nativeElement)) {
        scrollToElement(control.nativeElement);
    } else {
        console.warn('Cannot scroll to invalid control, DOM element is not attached to the nativeElement on the FormControl item.', control);
    }
}

export function findFirstInvalidControl(form: FormGroup): FormControl {
    const invalidItems = findInvalidControls(form);

    if (!isNullOrUndefined(invalidItems) && invalidItems.length > 0) {
        const positionedControls: ControlPosition[] = getOrderedControls();

        return positionedControls.length > 0
            ? positionedControls[0].control
            : invalidItems[0];
    }

    function getOrderedControls(): ControlPosition[] {
        const positions: ControlPosition[] = invalidItems
            .filter(control => !isNullOrUndefined(control.getNativeElement()))
            .map(control => {
                const element = control.getNativeElement();
                if (!isNullOrUndefined(element)) {
                    const pos = getDocumentOffsetPosition(element);
                    return new ControlPosition({ control, top: pos.top, left: pos.left });
                }
            });
        return sortPositions(positions);
    }

    function getDocumentOffsetPosition(element: HTMLElement): ControlPosition {
        const position = new ControlPosition({ top: element.offsetTop, left: element.offsetLeft });

        if (element.offsetParent) {
            const parentPosition = getDocumentOffsetPosition(element.offsetParent as HTMLElement);
            position.top += parentPosition.top;
            position.left += parentPosition.left;
        }
        return position;
    }

    function sortPositions(positions: ControlPosition[]): ControlPosition[] {
        return positions.sort((a, b) => {
            if (a.top < b.top) { return -1; }
            if (a.top > b.top) { return 1; }
            return 0;
        });
    }
}

export function findInvalidControls(form: FormGroup): FormControl[] {
    const invalid: FormControl[] = [];
    const controls = form.controls;

    for (const name in controls) {
        if (controls[name].invalid) {
            if (controls[name] instanceof FormGroup) {
                invalid.push(...findInvalidControls(controls[name] as FormGroup));
            } else {
                invalid.push(controls[name] as FormControl);
            }
        }
    }
    return invalid;
}

class ControlPosition {
    constructor(init?: Partial<ControlPosition>) {
        Object.assign(this, init);
    }

    control: FormControl;
    top: number;
    left: number;
}
