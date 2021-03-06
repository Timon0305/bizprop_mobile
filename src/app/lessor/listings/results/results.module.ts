import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { SearchResultModule } from '../../../client/search/results/search-result-overview/search-result.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ResultsPageRoutingModule,

        SearchResultModule
    ],
    declarations: [ResultsPage]
})
export class ResultsPageModule { }
