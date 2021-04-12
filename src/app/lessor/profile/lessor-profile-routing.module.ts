import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessorProfilePage } from './lessor-profile.page';

const routes: Routes = [
  {
    path: '',
    component: LessorProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessorProfilePageRoutingModule {}
