import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquiriesResultsPage } from './results.page';

const routes: Routes = [
  {
    path: '',
    component: InquiriesResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsPageRoutingModule {}
