import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientSearchPage } from './client-search.page';

const routes: Routes = [
    {
        path: '',
        component: ClientSearchPage,
        children: [
            {
                path: 'filter',
                loadChildren: () => import('./filter/search-filter.module').then(m => m.SearchFilterPageModule)
            },
            {
                path: 'results',
                loadChildren: () => import('./results/search-results.module').then(m => m.SearchResultsPageModule)
            },
            {
                path: 'view-result/:id',
                loadChildren: () => import('./view-result/view-result.module').then(m => m.ViewResultPageModule)
            },
            {
                path: '',
                redirectTo: '/client/search/filter',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/client/search/filter',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientSearchPageRoutingModule { }
