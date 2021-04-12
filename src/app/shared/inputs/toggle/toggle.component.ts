import { Component, Input, OnInit } from '@angular/core';
import { Guid } from '../../models/guid';

@Component({
    selector: 'app-toggle-input',
    templateUrl: './toggle.component.html'
})
export class ToggleComponent implements OnInit {

    @Input() label: string;
    @Input() value: boolean;

    public id: string = Guid.shortGuid();

    constructor() { }

    ngOnInit(): void {
    }

}
