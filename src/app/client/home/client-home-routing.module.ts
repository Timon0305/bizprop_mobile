import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientHomePage } from './client-home.page';

const routes: Routes = [
    {
        path: '',
        component: ClientHomePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientPageRoutingModule { }
