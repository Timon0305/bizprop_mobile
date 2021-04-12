import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared/shared.module';
import { SearchFilterPageRoutingModule } from './search-filter-routing.module';
import { SearchFilterPage } from './search-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchFilterPageRoutingModule,

    SharedModule,
  ],
  declarations: [SearchFilterPage]
})
export class SearchFilterPageModule {}
