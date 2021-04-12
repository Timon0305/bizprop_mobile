import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessorListingsPage } from './listings.page';

const routes: Routes = [
    {
        path: '',
        component: LessorListingsPage,
        children: [
            {
                path: 'results',
                loadChildren: () => import('./results/results.module').then(m => m.ResultsPageModule)
            },
            {
                path: 'view/:id',
                loadChildren: () => import('./view-listing/view-listing.module').then(m => m.ViewListingPageModule)
            },
            {
                path: '**',
                redirectTo: 'results'
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'results'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LessorListingsPageRoutingModule { }
