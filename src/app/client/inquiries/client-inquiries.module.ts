import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ClientInquiriesPageRoutingModule } from './client-inquiries-routing.module';
import { ClientInquiriesPage } from './client-inquiries.page';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { WatchlistComponent } from './watch-list/watch-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClientInquiriesPageRoutingModule
    ],
    declarations: [
        ClientInquiriesPage,
        InquiriesComponent,
        WatchlistComponent
    ]
})
export class ClientInquiriesPageModule { }
