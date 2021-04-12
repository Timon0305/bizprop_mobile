import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        children: [
            {
                path: 'login',
                loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
            },
            {
                path: 'register-client',
                loadChildren: () => import('./pages/register/register-client/register-client.module').then(m => m.RegisterClientPageModule)
            },
            {
                path: 'register-lessor',
                loadChildren: () => import('./pages/register/register-lessor/register-lessor.module').then(m => m.RegisterLessorPageModule)
            },
            {
                path: 'register-selection',
                loadChildren: () => import('./pages/register/register-selection/register-selection.module').then(m => m.RegisterSelectionPageModule)
            },
            {
                path: 'verify',
                loadChildren: () => import('./pages/register/verify/verify.module').then(m => m.VerifyPageModule)
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutes {

}
