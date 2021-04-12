import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewResultPageRoutingModule } from './view-result-routing.module';

import { ViewResultPage } from './view-result.page';
import { ImageViewerModule } from '../../../shared/image-viewer/image-viewer.module';
import { SwiperModule } from 'swiper/angular';
import { BizInputsModule } from '../../../shared/inputs/inputs.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SwiperModule,

        ViewResultPageRoutingModule,

        BizInputsModule,
        ImageViewerModule,
    ],
    declarations: [ViewResultPage]
})
export class ViewResultPageModule { }
