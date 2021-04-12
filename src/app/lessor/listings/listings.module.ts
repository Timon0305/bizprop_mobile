import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessorListingsPageRoutingModule } from './listings-routing.module';

import { LessorListingsPage } from './listings.page';
import { SharedModule } from '../../shared/shared.module';
import { SearchResultsPageModule } from '../../client/search/results/search-results.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,

        LessorListingsPageRoutingModule,

        SearchResultsPageModule,
        SharedModule,
    ],
    declarations: [LessorListingsPage]
})
export class LessorListingsPageModule { }
