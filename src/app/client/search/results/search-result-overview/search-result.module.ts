import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchResultOverviewComponent } from './search-result-overview.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        SearchResultOverviewComponent
    ],
    exports: [
        SearchResultOverviewComponent
    ]
})
export class SearchResultModule {

}
