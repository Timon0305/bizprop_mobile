import { ContactDetail } from '../../models/contact-detail';
import { Inquiries, Inquiry } from '../../models/inquiry';


export const INQUIRIES_DATA: Inquiries = [
    new Inquiry({
        id: '1',
        name: 'Aaron Smith',
        date: new Date(),
        resultId: '1',
        additional: 'Room number 28C',
        contact: new ContactDetail({
            name: 'Aaron Smith',
            email: 'AaronSmith@test.com',
            contactNumber: '084 000 8465'
        }),
    }),
    new Inquiry({
        id: '2',
        name: 'Craig Higgins',
        date: new Date(2021, 0, 2, 15, 0,),
        resultId: '1', 
        additional: 'Room number 28C',
        contact: new ContactDetail({
            name: 'Craig Higgins',
            email: 'CraigHiggins@test.com',
            contactNumber: '084 000 8465'
        }),
    }),
    new Inquiry({
        id: '3',
        name: 'Francesco Tortillini',
        date: new Date(2021, 0, 3, 15, 0,),
        resultId: '1',
        additional: 'Room number 28C',
        contact: new ContactDetail({
            name: 'Francesco Tortillini',
            email: 'FrancescoTortillini@test.com',
            contactNumber: '084 000 8465'
        }),
    }),
    new Inquiry({
        id: '4',
        name: 'Noah Jones',
        date: new Date(2021, 0, 4, 15, 0,),
        resultId: '2',
        additional: 'Room number 28C',
        contact: new ContactDetail({
            name: 'Noah Jones',
            email: 'NoahJones@test.com',
            contactNumber: '084 000 8465'
        }),
    }),
    new Inquiry({
        id: '5',
        name: 'Lily McDougall',
        date: new Date(2021, 0, 5, 15, 0,),
        resultId: '2',
        additional: 'Room number 28C',
        contact: new ContactDetail({
            name: 'Lily McDougall',
            email: 'LilyMcDougall@test.com',
            contactNumber: '084 000 8465'
        }),
    }),
    new Inquiry({
        id: '6',
        name: 'Tomas Kravek',
        date: new Date(2021, 0, 6, 15, 0,),
        resultId: '3',
        additional: 'Room number 28C',
        contact: new ContactDetail({
            name: 'Tomas Kravek',
            email: 'TomasKravek@test.com',
            contactNumber: '084 000 8465'
        }),
    }),
    new Inquiry({
        id: '7',
        name: 'Sylianna Svitzer',
        date: new Date(2021, 0, 7, 15, 0,),
        resultId: '3',
        additional: 'Room number 28C',
        contact: new ContactDetail({
            name: 'Sylianna Svitzer',
            email: 'SyliannaSvitzer@test.com',
            contactNumber: '084 000 8465'
        }),
    }),
    new Inquiry({
        id: '8',
        name: 'Ben Barns',
        date: new Date(2021, 1, 8, 15, 0,),
        resultId: '1',
        additional: 'Room number 28C',
        contact: new ContactDetail({
            name: 'Ben Barns',
            email: 'BenBarns@test.com',
            contactNumber: '084 000 8465'
        }),
    }),
    new Inquiry({
        id: '9',
        name: 'Ben Barns',
        date: new Date(2021, 1, 9, 15, 0,),
        resultId: '2',
        additional: 'Room number 28C',
        contact: new ContactDetail({
            name: 'Ben Barns',
            email: 'BenBarns@test.com',
            contactNumber: '084 000 8465'
        }),
    }),
];
