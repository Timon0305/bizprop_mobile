import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientSearchPageRoutingModule } from './client-search-routing.module';

import { ClientSearchPage } from './client-search.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClientSearchPageRoutingModule
    ],
    declarations: [ClientSearchPage]
})
export class ClientSearchPageModule { }
