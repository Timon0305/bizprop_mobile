import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessorInquiriesPageRoutingModule } from './inquiries-routing.module';

import { LessorInquiriesPage } from './inquiries.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessorInquiriesPageRoutingModule,
    
    SharedModule,
  ],
  declarations: [LessorInquiriesPage]
})
export class LessorInquiriesPageModule {}
