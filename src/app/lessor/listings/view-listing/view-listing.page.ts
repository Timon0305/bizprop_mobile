import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import Swiper from 'swiper';
import { SearchService } from '../../../shared/services/search/search.service';
import { ImageModalComponent } from '../../../shared/image-viewer/image-modal/image-modal.component';
import { SearchResult } from '../../../shared/models/search-result';

@Component({
    selector: 'app-view-listing',
    templateUrl: './view-listing.page.html'
})
export class ViewListingPage implements OnInit {

    searchResult: SearchResult;

    sliderOptions = {
        zoom: false
    };

    swiper: Swiper;
    form: FormGroup;


    today: Date = new Date(Date.now());
    nextWeek: Date = new Date();
    previousWeek: Date = new Date();

    constructor(private readonly route: ActivatedRoute,
        private readonly searchService: SearchService,
        private modalController: ModalController,
        private toastController: ToastController,
        private readonly router: Router) {
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

    public save(): void {
        this.presentToast('Changes saved');
        this.router.navigateByUrl('lessor/home');
    }

    private async presentToast(message: string): Promise<void> {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        toast.present();
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
