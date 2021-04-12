import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeadingSectionModule } from './heading-logo/heading-logo.module';

import { BizInputsModule } from './inputs/inputs.module';

@NgModule({
    imports: [
        CommonModule,
        BizInputsModule,
        HeadingSectionModule
    ],
    exports: [
        BizInputsModule,
        HeadingSectionModule
    ]
})
export class SharedModule {

}
