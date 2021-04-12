import { FormArray, FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { SelectOptions } from './inputs/select/select-option';

export const isNullOrEmpty: (value: string) => boolean
    = (value: string): boolean => isNullOrUndefined(value) || value?.trim() === '';


export const convertToFormArray: (options: SelectOptions) => FormArray
    = (options: SelectOptions): FormArray => new FormArray(options.map(option => new FormControl(option.selected)))