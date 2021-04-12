import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SearchResultModule } from './search-result-overview/search-result.module';
import { SearchResultsPageRoutingModule } from './search-results-routing.module';
import { SearchResultsPage } from './search-results.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchResultsPageRoutingModule,

        SearchResultModule
    ],
    declarations: [
        SearchResultsPage,
    ],
})
export class SearchResultsPageModule { }
