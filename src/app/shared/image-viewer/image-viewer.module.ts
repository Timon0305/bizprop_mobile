import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ImageModalComponent } from './image-modal/image-modal.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        SwiperModule
    ],
    declarations: [
        ImageModalComponent
    ],
    exports: [
        ImageModalComponent
    ]
})
export class ImageViewerModule { }
