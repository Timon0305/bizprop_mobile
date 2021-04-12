import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessorEditPropertyPageRoutingModule } from './edit-property-routing.module';

import { LessorEditPropertyPage } from './edit-property.page';
import { SharedModule } from '../../shared/shared.module';
import { MapSelectorModule } from '../../shared/map-selector/map-selector.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessorEditPropertyPageRoutingModule,

    SharedModule,
    MapSelectorModule
  ],
  declarations: [LessorEditPropertyPage]
})
export class LessorEditPropertyPageModule {}
