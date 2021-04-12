import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessorAddPropertyPage } from './add-property.page';

const routes: Routes = [
  {
    path: '',
    component: LessorAddPropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessorAddPropertyPageRoutingModule {}
