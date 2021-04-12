import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchResult, SearchResults } from '../../../shared/models/search-result';
import { SearchService } from '../../../shared/services/search/search.service';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.page.html'
})
export class SearchResultsPage implements OnInit {

    searchResults: SearchResults = [];

    constructor(private readonly searchService: SearchService,
        private readonly router: Router) {
        this.initializeSearchResults();
    }

    ngOnInit(): void {
    }

    public onResultClicked(result: SearchResult): void {
        this.router.navigate(['client/search/view-result', result.id]);
    }

    private initializeSearchResults(): void {
        this.searchResults = this.searchService.getResults();
    }



}
