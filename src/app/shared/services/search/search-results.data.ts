import { ContactDetail } from '../../models/contact-detail';
import { SearchResult, SearchResults } from '../../models/search-result';
import { SearchResultFeature } from '../../models/search-result-feature';

export const SEARCH_RESULTS: SearchResults = [
    new SearchResult({
        id: '1',
        title: 'Room 1',
        address: 'Sector 150, Pusta Road, noida',
        cost: 3500,
        totalCost: 1000000,
        distance: 20,
        tags: ['Active', 'Premium', '120 days'],

        images: ['/assets/images/room 1.jpg', '/assets/images/room 2.jpg', '/assets/images/room 3.jpg'],
        features: [
            new SearchResultFeature({ icon: 'fas fa-building', title: '3 Rooms' }),
            new SearchResultFeature({ icon: 'fas fa-paperclip', title: 'Amenities' }),
            new SearchResultFeature({ icon: 'fas fa-coffee', title: 'Equipment' }),
            new SearchResultFeature({ icon: 'fas fa-file-alt', title: 'Placeholder' }),
            new SearchResultFeature({ icon: 'fas fa-file-alt', title: 'Placeholder' }),
            new SearchResultFeature({ icon: 'fas fa-file-alt', title: 'Placeholder' }),
        ],
        description: 'ATS Pious Hideaways is a new premium housing project situated at Sector 150 Noida near Noida Expressway. The elegant roject is developed by ATS Advertiser who is very trustworthy and promising Advertiser in India.',
        contact: new ContactDetail({ name: 'John Doe', contactNumber: '080 000 0000', email: 'email@address.com' }),
        type: 'Free standing'
    }),
    new SearchResult({
        id: '2',
        title: 'Room 2',
        address: 'Sector 150, Noida',
        cost: 1500,
        totalCost: 1000000,
        distance: 9,
        tags: ['Inactive', 'Normal', '30 days'],
        images: ['/assets/images/room 2.jpg', '/assets/images/room 1.jpg', '/assets/images/room 3.jpg'],
        features: [
            new SearchResultFeature({ icon: 'fas fa-building', title: '3 Rooms' }),
            new SearchResultFeature({ icon: 'fas fa-paperclip', title: 'Amenities' }),
            new SearchResultFeature({ icon: 'fas fa-coffee', title: 'Equipment' }),
        ],
        description: 'ATS Pious Hideaways is a new premium housing project situated at Sector 150 Noida near Noida Expressway. The elegant roject is developed by ATS Advertiser who is very trustworthy and promising Advertiser in India.',
        contact: new ContactDetail({ name: 'John Doe', contactNumber: '080 000 0000', email: 'email@address.com' }),
        type: 'Duplex'
    }),
    new SearchResult({
        id: '3',
        title: 'Room 3',
        address: 'Sector 150, Pusta Road, noida',
        cost: 2500,
        totalCost: 1000000,
        distance: 9,
        tags: ['Delisted', 'Normal', '120 days'],
        images: ['/assets/images/room 3.jpg', '/assets/images/room 1.jpg', '/assets/images/room 2.jpg'],
        features: [
            new SearchResultFeature({ icon: 'fas fa-building', title: '3 Rooms' }),
            new SearchResultFeature({ icon: 'fas fa-paperclip', title: 'Amenities' }),
            new SearchResultFeature({ icon: 'fas fa-coffee', title: 'Equipment' }),
        ],
        description: 'ATS Pious Hideaways is a new premium housing project situated at Sector 150 Noida near Noida Expressway. The elegant roject is developed by ATS Advertiser who is very trustworthy and promising Advertiser in India.',
        contact: new ContactDetail({ name: 'John Doe', contactNumber: '080 000 0000', email: 'email@address.com' }),
        type: 'Office Building'
    }),
];
