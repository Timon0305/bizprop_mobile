import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { InquiriesResultsPage } from './results.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ResultsPageRoutingModule,
        SharedModule,
    ],
    declarations: [InquiriesResultsPage]
})
export class ResultsPageModule { }
