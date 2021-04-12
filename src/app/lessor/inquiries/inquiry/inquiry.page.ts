import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inquiry } from '../../../shared/models/inquiry';
import { InquiryService } from '../../../shared/services/inquiries/inquiries.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchResult } from '../../../shared/models/search-result';
import { Swiper } from 'swiper';
import { ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../../../shared/image-viewer/image-modal/image-modal.component';
import { SearchService } from '../../../shared/services/search/search.service';

@Component({
    selector: 'app-inquiry',
    templateUrl: './inquiry.page.html',
})
export class InquiryPage implements OnInit {

    form: FormGroup;
    inquiry: Inquiry;
    searchResult: SearchResult;

    sliderOptions = {
        zoom: false
    };

    swiper: Swiper;

    constructor(private readonly route: ActivatedRoute,
        private readonly inquiryService: InquiryService,
        private readonly searchService: SearchService,
        private readonly modalController: ModalController) {
        this.initialize();
    }

    ngOnInit(): void {
    }

    calendarTime(): string {
        return moment(this.inquiry.date).calendar();
    }

    openPreview(img: number): void {
        this.modalController.create({
            component: ImageModalComponent,
            componentProps: {
                img,
            }
        }).then(modal => modal.present());
    }

    private initialize(): void {
        const inquiryId: string = this.route.snapshot.params['id'];
        this.inquiry = this.getInquiryResult(inquiryId);

        this.searchResult = this.searchService.getResult(this.inquiry.resultId);

        this.initializeForm();
    }

    private initializeForm() {
        this.form = new FormBuilder().group({
            name: [this.inquiry.name],
            contact: [this.inquiry.contact.contactNumber],
            email: [this.inquiry.contact.email],
            from: [new Date()],
            to: [new Date()]
        });
    }

    private getInquiryResult(id: string): Inquiry {
        return this.inquiryService.getInquiry(id);
    }

}
