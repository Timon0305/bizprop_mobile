import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-input-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

    @Output() clicked: EventEmitter<void> = new EventEmitter();

    @Input() label: string;

    constructor() { }

    ngOnInit(): void { }

    click(): void {
        this.clicked.emit();
    }
}
