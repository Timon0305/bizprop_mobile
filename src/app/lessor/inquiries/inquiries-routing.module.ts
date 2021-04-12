import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessorInquiriesPage } from './inquiries.page';

const routes: Routes = [
    {
        path: '',
        component: LessorInquiriesPage,
        children: [
            {
                path: 'results',
                loadChildren: () => import('./results/results.module').then(m => m.ResultsPageModule)
            },
            {
                path: 'view/:id',
                loadChildren: () => import('./inquiry/inquiry.module').then(m => m.InquiryPageModule)
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
export class LessorInquiriesPageRoutingModule { }
