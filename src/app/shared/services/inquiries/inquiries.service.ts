import { Injectable } from '@angular/core';
import { Inquiries, Inquiry } from '../../models/inquiry';
import { INQUIRIES_DATA } from './inquiries.data';

@Injectable({
    providedIn: 'root'
})
export class InquiryService {
    private data: Inquiries = [...INQUIRIES_DATA];

    getInquiries(): Inquiries {
        return this.data;
    }

    getInquiry(id: string): Inquiry {
        return this.getInquiries().find(result => result.id === id);
    }
}
