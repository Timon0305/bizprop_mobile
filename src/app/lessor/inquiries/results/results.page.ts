import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { Inquiries } from '../../../shared/models/inquiry';
import { InquiryService } from '../../../shared/services/inquiries/inquiries.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.page.html'
})
export class InquiriesResultsPage implements OnInit {

    inquiries: Inquiries = [];

    constructor(private readonly inquiriesService: InquiryService, private readonly router: Router) {
        this.getInquiries();
    }

    public ngOnInit(): void {

    }

    public relativeTimeAgo(date: Date): string {
        return moment(date).fromNow();
    }

    route(path: string): void {
        this.router.navigateByUrl(path);
    }

    private getInquiries(): void {
        this.inquiries = this.inquiriesService.getInquiries();
    }
}
