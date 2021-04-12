import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { LessorPage } from './lessor.page';

const routes: Routes = [
    {
        path: '',
        component: LessorPage,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/lessor-home.module').then(m => m.LessorHomePageModule),
                canLoad: [AuthGuard]
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/lessor-profile.module').then(m => m.LessorProfilePageModule)
            },
            // {
            //     path: 'notifications',
            //     loadChildren: () => import('./notifications/client-notifications.module').then(m => m.ClientNotificationsPageModule)
            // },
            {
                path: 'settings',
                loadChildren: () => import('./settings/settings.module').then(m => m.LessorSettingsPageModule)
            },
            {
                path: 'property/add', 
                loadChildren: () => import('./add-property/add-property.module').then(m => m.LessorAddPropertyPageModule)
            },
            {
                path: 'property/edit',
                loadChildren: () => import('./edit-property/edit-property.module').then(m => m.LessorEditPropertyPageModule)
            },
            {
                path: 'listings',
                loadChildren: () => import('./listings/listings.module').then(m => m.LessorListingsPageModule)
            },
            {
                path: 'inquiries',
                loadChildren: () => import('./inquiries/inquiries.module').then(m => m.LessorInquiriesPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/lessor/home',
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
export class LessorRoutes {

}
