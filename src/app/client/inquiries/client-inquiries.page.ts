import { Component, OnInit } from '@angular/core';
import { Inquiries, Inquiry } from '../../shared/models/inquiry';

@Component({
    selector: 'app-client-inquiries',
    templateUrl: './client-inquiries.page.html',
})
export class ClientInquiriesPage implements OnInit {
    public segment: string = 'inquiries';
    public inquiries: Inquiries = [];
    public watchlist: Inquiries = [];


    constructor() {
        this.initializeInquiries();
        this.initializeWatchlist();
    }

    public ngOnInit(): void {
    }

    public segmentChanged(event: CustomEvent): void {
        // debugger;
        this.segment = event.detail.value;
    }

    private initializeInquiries(): void {
        this.inquiries = [
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.11.11' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.10.10' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.09.09' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.08.08' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.07.07' }),
        ];
    }

    private initializeWatchlist(): void {
        this.watchlist = [
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.11.11' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.10.10' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.09.09' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.08.08' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.07.07' }),
        ];
    }
}
