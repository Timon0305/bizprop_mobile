import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessorEditPropertyPage } from './edit-property.page';

const routes: Routes = [
  {
    path: '',
    component: LessorEditPropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessorEditPropertyPageRoutingModule {}
