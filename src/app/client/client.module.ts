import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ClientRoutes } from './client-routing.module';
import { ClientPage } from './client.page';
import { ClientHomePageModule } from './home/client-home.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ClientRoutes,
        ClientHomePageModule
    ],
    declarations: [
        ClientPage
    ]
})
export class ClientModule { }
