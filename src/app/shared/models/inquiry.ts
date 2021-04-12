import { ContactDetail } from './contact-detail';
import { Guid } from './guid';

export type Inquiries = Inquiry[];

export class Inquiry {
    image: string;
    heading: string;
    additional: string;

    name: string;
    date: Date = new Date();
    id: string = Guid.shortGuid();
    contact: ContactDetail = new ContactDetail();
    resultId: string;

    constructor(init?: Partial<Inquiry>) {
        Object.assign(this, init);
    }
}
