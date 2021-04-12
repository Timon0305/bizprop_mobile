import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../../shared/services/search/search.service';
import { SearchResult, SearchResults } from '../../../shared/models/search-result';

@Component({
    selector: 'app-results',
    templateUrl: './results.page.html'
})
export class ResultsPage implements OnInit {

    searchResults: SearchResults = [];

    constructor(private readonly searchService: SearchService,
        private readonly router: Router) {
        this.initializeSearchResults();
    }

    ngOnInit(): void {
    }

    onResultClicked(result: SearchResult): void {
        this.router.navigate(['lessor/listings/view', result.id]);
    }

    private initializeSearchResults(): void {
        this.searchResults = this.searchService.getResults();
    }
}
