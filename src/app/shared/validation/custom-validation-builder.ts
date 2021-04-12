import { ValidationBuilder } from 'ng-form-validator-builder';
import { MultiSelectValidationBuilder } from './multi-validation-builder';

export class CustomValidationBuilder extends ValidationBuilder {
    get multiSelect(): MultiSelectValidationBuilder {
        super.initialize();
        return new MultiSelectValidationBuilder(this);
    }
}
