import { Injectable } from '@angular/core';

import { SearchResult, SearchResults } from '../../models/search-result';
import { SEARCH_RESULTS } from './search-results.data';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private data: SearchResults = [...SEARCH_RESULTS];

    getResults(): SearchResults {
        return this.data;
    }

    getResult(id: string): SearchResult {
        return this.getResults().find(result => result.id === id);
    }
}
