import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { ClientNotificationsPageRoutingModule } from './client-notifications-routing.module';
import { ClientNotificationsPage } from './client-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientNotificationsPageRoutingModule,

        SharedModule
  ],
  declarations: [ClientNotificationsPage]
})
export class ClientNotificationsPageModule {}
