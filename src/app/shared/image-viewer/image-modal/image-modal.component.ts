import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit {

    @ViewChild('slider', { read: ElementRef }) slider: ElementRef;

    img: any;
    sliderOpts: SwiperOptions = {
        zoom: true
    };

    constructor(private navParams: NavParams,
        private readonly modalController: ModalController) { }

    ngOnInit(): void {
        this.img = this.navParams.get('img');
    }

    zoom(zoomIn: boolean): void {
        const swiper = new Swiper(this.slider.nativeElement);

        const zoom_ = this.slider.nativeElement.swiper.zoom;

        let zoom = swiper.zoom;

        if (zoomIn) {
            zoom.in();
        } else {
            zoom.out();
        }
    }

    close(): void {
        this.modalController.dismiss();
    }

    /* -------------------------------------------------------------------------- */
    /*                                   Swiper                                   */
    /* -------------------------------------------------------------------------- */

    onSwiper(event): void {
        console.log('onSwiper', event);
    }

    onSlideChange(): void {
        console.log('Slide Changed');
    }

}
