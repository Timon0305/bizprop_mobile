import { ContactDetail } from './contact-detail';
import { Guid } from './guid';
import { SearchResultFeatures } from './search-result-feature';

export type SearchResults = SearchResult[];

export class SearchResult {
    id: string = Guid.shortGuid(); // TODO: This will come from the backend, remove the guid.
    title: string;
    type: string;
    description: string;
    address: string;
    cost: number;
    totalCost: number;
    tags: string[] = [];
    distance: number; // In km
    images: string[];
    contact: ContactDetail;

    features: SearchResultFeatures = [];


    constructor(init?: Partial<SearchResult>) {
        Object.assign(this, init);
    }
}
