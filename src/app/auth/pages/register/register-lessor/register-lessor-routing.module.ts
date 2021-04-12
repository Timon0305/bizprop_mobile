import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterLessorPage } from './register-lessor.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterLessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterLessorPageRoutingModule {}
