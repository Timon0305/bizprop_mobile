import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
    {
        path: '', redirectTo: 'auth', pathMatch: 'full',
    },
    {
        path: '',
        children: [
            {
                path: 'auth',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
            },
            {
                path: 'client',
                loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
                // TODO: Need a guard to make sure the user type is of type client.
                canActivate: [AuthGuard]
            },
            {
                path: 'lessor',
                loadChildren: () => import('./lessor/lessor.module').then(m => m.LessorModule),
                // TODO: Need a guard to make sure the user type is of type lessor.
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'auth/login'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
