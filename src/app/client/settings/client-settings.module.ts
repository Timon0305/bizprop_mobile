import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { ClientSettingsPageRoutingModule } from './client-settings-routing.module';
import { ClientSettingsPage } from './client-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    ClientSettingsPageRoutingModule,
    SharedModule
  ],
  declarations: [ClientSettingsPage]
})
export class ClientSettingsPageModule {}
