import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-step-body',
    template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class StepBodyComponent implements OnInit {
    @ViewChild(TemplateRef)
    bodyContent: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void { }
}
