import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectOption, SelectOptions } from '../../../shared/inputs/select/select-option';

@Component({
    selector: 'app-search-filter',
    templateUrl: './search-filter.page.html'
})
export class SearchFilterPage implements OnInit {
    form: FormGroup;
    initialState: any = {};
    isResetting: boolean = false;

    propertyTypes: SelectOptions = [];

    propertyUses: SelectOptions = [];

    decor: SelectOptions = [];

    amenities: SelectOptions = [];

    listingTypes: SelectOptions = [];

    today: Date = new Date(Date.now());
    nextWeek: Date = new Date();
    dateFormat: string = 'yyyy/MM/dd';

    constructor(private readonly datePipe: DatePipe, private readonly router: Router) {
        this.initializeForm();
        this.initializeOptions();

        this.nextWeek.setDate(new Date().getDate() + 7);
    }


    ngOnInit(): void {
    }

    apply(): void {
        this.router.navigateByUrl('client/search/results');
    }

    reset(): void {
            this.initializeOptions();
            this.initializeForm();
    }

    private initializeOptions() {
        this.initializePropertyTypes();
        this.initializePropertyUses();
        this.initializeDecor();
        this.initializeAmenities();
        this.initializeListingTypes();
    }

    private initializePropertyTypes(): void {
        this.propertyTypes = [
            new SelectOption('Type 1', 'type1'),
            new SelectOption('Type 2', 'type2'),
            new SelectOption('Type 3', 'type3'),
            new SelectOption('Type 4', 'type4'),
        ];
    }

    private initializeDecor(): void {
        this.decor = [
            new SelectOption('Furnished', 'furnished', true),
            new SelectOption('Unfurnished', 'unfurnished'),
        ];
    }

    private initializePropertyUses(): void {
        this.propertyUses = [
            new SelectOption('Personal', 'personal'),
            new SelectOption('Business', 'business'),
        ];
    }

    private initializeAmenities(): void {
        this.amenities = [
            new SelectOption('Pool', 'pool'),
            new SelectOption('Garage', 'garage'),
            new SelectOption('Entertainment Area', 'entertainment'),
        ];
    }

    private initializeListingTypes(): void {
        this.listingTypes = [
            new SelectOption('Type 1', 'type1'),
            new SelectOption('Type 2', 'type2'),
            new SelectOption('Type 3', 'type3'),
            new SelectOption('Type 4', 'type4'),
        ];
    }

    private initializeForm(): void {
        this.initialState = {
            dateFrom: [this.today, []],
            dateTo: [this.nextWeek, []],
            rooms: [],
            propertyTypes: [this.convertToFormArray(this.propertyTypes)],
            propertyUses: [this.convertToFormArray(this.propertyUses)],
            decor: [this.convertToFormArray(this.decor)],
            amenities: [this.convertToFormArray(this.amenities)],
            type: [this.convertToFormArray(this.listingTypes)],
        };

        this.form = new FormBuilder().group(this.initialState);
    }

    private convertToFormArray(options: SelectOptions): FormArray {
        return new FormArray(options.map(type => new FormControl(type.selected)));
    }
}
