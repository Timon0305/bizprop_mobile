import { Pipe, PipeTransform } from '@angular/core';
import { FormArray } from '@angular/forms';
import { SelectOptions } from './select-option';

@Pipe({ name: 'select' })
export class SelectPipe implements PipeTransform {
    transform(formArray: FormArray, options: SelectOptions): string {
        const results: string[] = [];

        formArray.value.reduce((accumulator, currentItem, index) => {
            if (currentItem === true) {
                results.push(options[index].display);
            }
        });

        return results.join(', ');
    }
}
