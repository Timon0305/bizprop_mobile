import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessorSettingsPage } from './settings.page';

const routes: Routes = [
    {
        path: '',
        component: LessorSettingsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LessorSettingsPageRoutingModule { }
