import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessorHomePage } from './lessor-home.page';

const routes: Routes = [
    {
        path: '',
        component: LessorHomePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LessorPageRoutingModule { }
