import { Component, OnInit, Input, ContentChild, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

import { isNullOrUndefined } from 'util';
import { StepBodyComponent } from './step-body.component';

@Component({
    selector: 'app-step-item',
    template: '<ng-content></ng-content>',
})
export class StepItemComponent implements OnInit, OnChanges {
    @Input() label: string;
    @Input() active: boolean;
    @Input() done: boolean;

    @ContentChild(StepBodyComponent) bodyComponent: StepBodyComponent;

    @Output() activeChanged: EventEmitter<StepItemComponent> = new EventEmitter<StepItemComponent>();

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        this.handleActiveChanges(changes);
    }

    handleActiveChanges(changes: SimpleChanges): void {
        const change: SimpleChange = changes['active'];
        if (!isNullOrUndefined(change)) {
            const value: boolean = change.currentValue;
            if (!isNullOrUndefined(value)) {
                console.log('Active changed!');
                // Need to somehow set the active step here...
                if (value === true) {
                    this.activeChanged.emit(this); 
                }
            }
        }
    }

    ngOnInit(): void { }


}
