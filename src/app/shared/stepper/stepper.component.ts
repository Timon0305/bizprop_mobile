import { AfterContentChecked, AfterContentInit, Component, ContentChildren, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';

import { StepItemComponent } from './step-item.component';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
})
export class StepperComponent implements OnInit, OnDestroy, AfterContentInit, AfterContentChecked {
    @ContentChildren(StepItemComponent)
    steps: QueryList<StepItemComponent>;

    stepItems$: Observable<StepItemComponent[]>;
    activeStep: StepItemComponent;

    subs: Subscription[] = [];

    constructor() { }


    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    selectStep(step: StepItemComponent): void {
        if (this.activeStep === step) {
            return;
        }

        if (this.activeStep) {
            this.activeStep.active = false;
        }

        this.activeStep = step;

        step.active = true;
    }

    /* -------------------------------------------------------------------------- */
    /*                                 Tabbed code                                */
    /* -------------------------------------------------------------------------- */

    ngAfterContentInit(): void {
        this.stepItems$ = this.steps.changes
            .pipe(startWith(''))
            .pipe(delay(0))
            .pipe(map(() => this.steps.toArray()));

        this.steps
            .map(step => step.activeChanged)
            .forEach(emitter => {
                this.subs.push(emitter.subscribe((step: StepItemComponent) => {
                    if (step.active) {
                        this.selectStep(step);
                    }
                }));
            });
    }

    ngAfterContentChecked(): void {
        // choose the default step
        // we need to wait for a next VM turn,
        // because Step item content will not be initialized yet
        if (!this.activeStep) {
            Promise.resolve().then(() => {
                this.activeStep = this.steps.first;
            });
        }
    }
}
