import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { isNullOrEmpty } from '../../extensions';
import { InputBase } from '../input-base';

@Component({
    selector: 'app-multiline-input',
    templateUrl: './multiline.component.html'
})
export class MultilineComponent extends InputBase implements OnInit, AfterViewInit {
    @Input() rows: number = 3;

    get containsText(): boolean {
        return !isNullOrEmpty(this.formValue as string);
    }
    
    ngOnInit(): void {
        this.runChecks();
    }

}
