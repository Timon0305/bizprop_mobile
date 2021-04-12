import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientPage } from './client.page';

const routes: Routes = [
    {
        path: '',
        component: ClientPage,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/client-home.module').then(m => m.ClientHomePageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/client-profile.module').then(m => m.ClientProfilePageModule)
            },
            {
                path: 'notifications',
                loadChildren: () => import('./notifications/client-notifications.module').then(m => m.ClientNotificationsPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('./settings/client-settings.module').then(m => m.ClientSettingsPageModule)
            },
            {
                path: 'inquiries',
                loadChildren: () => import('./inquiries/client-inquiries.module').then(m => m.ClientInquiriesPageModule)
            },
            {
                path: 'rentals',
                loadChildren: () => import('./rentals/rentals.module').then(m => m.RentalsPageModule)
            },
            {
                path: 'search',
                loadChildren: () => import('./search/client-search.module').then(m => m.ClientSearchPageModule)
            },
            {
                path: '',
                redirectTo: '/client/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/client/home',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ClientRoutes {

}
