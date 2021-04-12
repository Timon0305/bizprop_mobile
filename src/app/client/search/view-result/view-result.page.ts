import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../../../shared/image-viewer/image-modal/image-modal.component';

import { SearchResult } from '../../../shared/models/search-result';
import { SearchService } from '../../../shared/services/search/search.service';

import SwiperCore, { Zoom } from 'swiper/core';
import Swiper from 'swiper';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

SwiperCore.use([Zoom]);

@Component({
    selector: 'app-view-result',
    templateUrl: './view-result.page.html'
})
export class ViewResultPage implements OnInit {

    searchResult: SearchResult;

    sliderOptions = {
        zoom: false,
        // Already see the second slides a bit inside the view
        // slidesPerView: 1.5,
        // centeredSlides: true,
        // spaceBetween: 20,
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        // },
    };

    swiper: Swiper;
    form: FormGroup;

    today: Date = new Date(Date.now());
    nextWeek: Date = new Date();
    previousWeek: Date = new Date();

    constructor(private readonly route: ActivatedRoute,
        private readonly searchService: SearchService,
        private modalController: ModalController) {
        this.initialize();
    }

    ngOnInit(): void {
        this.swiper = new Swiper('.swiper-container', {
            zoom: {
                maxRatio: 5,
            },
        });
    }

    openPreview(img: number): void {
        console.log(`Opening preview for img ${img}`);
        this.modalController.create({
            component: ImageModalComponent,
            componentProps: {
                img,
            }
        }).then(modal => modal.present());
    }

    private initialize(): void {
        const searchId: string = this.route.snapshot.params['id'];
        this.searchResult = this.getSearchResult(searchId);

        this.constructForm();
    }

    private constructForm() {
        this.nextWeek.setDate(new Date().getDate() + 7);
        this.previousWeek.setDate(new Date().getDate() - 7);

        this.form = new FormBuilder().group({
            from: new FormControl({ value: this.previousWeek, disabled: true }),
            to: [{ value: this.nextWeek, disabled: true }],
        });
    }

    private getSearchResult(searchId: string): SearchResult {
        return this.searchService.getResult(searchId);
    }


}
