import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MapSelectorModule } from '../../shared/map-selector/map-selector.module';
import { SharedModule } from '../../shared/shared.module';
import { ClientPageRoutingModule } from './client-home-routing.module';
import { ClientHomePage } from './client-home.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,

        ClientPageRoutingModule,

        SharedModule,
        MapSelectorModule
    ],
    declarations: [ClientHomePage]
})
export class ClientHomePageModule { }
