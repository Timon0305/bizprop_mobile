import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResult } from '../../../../shared/models/search-result';

@Component({
    selector: 'app-search-result-overview',
    templateUrl: './search-result-overview.component.html',
})
export class SearchResultOverviewComponent implements OnInit {

    @Input() result: SearchResult;
    @Input() editable: boolean = false;
    
    @Output() resultClicked: EventEmitter<SearchResult> = new EventEmitter();

    constructor(private readonly router: Router) { }

    ngOnInit(): void { }

    edit(event: Event): boolean {

        event.stopPropagation();
        event.preventDefault();
        event.stopImmediatePropagation();


        this.resultClicked.emit(this.result);
        return false;
    }

    view(): void {
        this.resultClicked.emit(this.result);
    }

}
