import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-heading-logo',
    templateUrl: './heading-logo.component.html'
})
export class HeadingSectionComponent implements OnInit {

    @Input() headingSize: 'large' | 'normal' | 'smaller' = 'large';

    @Input() heading: string;
    @Input() defaultHref: string = '';
    @Input() displayBack: boolean = true;

    @Input() logo: string;


    get headingClass(): string {
        switch (this.headingSize) {
            case 'large': return 'heading-1';
            case 'normal': return 'heading-2';
            case 'smaller': return 'heading-3';
            default: return 'heading-1';
        }
    }

    constructor() { }

    ngOnInit(): void { }

}
