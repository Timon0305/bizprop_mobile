export class ContactDetail {
    name: string;
    contactNumber: string;
    email: string;
    
    constructor(init?: Partial<ContactDetail>) {
        Object.assign(this, init);
    }
}