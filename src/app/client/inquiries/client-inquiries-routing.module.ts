import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientInquiriesPage } from './client-inquiries.page';

const routes: Routes = [
  {
    path: '',
    component: ClientInquiriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientInquiriesPageRoutingModule {}
