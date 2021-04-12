import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-map-selector',
    templateUrl: './map-selector.component.html'
})
export class MapSelectorComponent implements OnInit {

    @Input() form: FormGroup;
    @Input() name: string;
    @Input() label: string = 'Select your address on the map';
    @Input() iconClass: string;

    @Output() iconClicked: EventEmitter<any> = new EventEmitter();
    @Output() mapClicked: EventEmitter<any> = new EventEmitter();

    constructor(private readonly toastController: ToastController) { }

    public ngOnInit(): void { }

    public async onIconClick(event: any): Promise<void> {

        const toast = await this.toastController.create({
            message: 'This will open a map selection modal',
            duration: 2000
        });
        toast.present();

        this.iconClicked.emit(event);
    }

    async mapClick(event: any): Promise<void> {
        const toast = await this.toastController.create({
            message: 'This will open a map selection modal',
            duration: 2000
        });
        toast.present();

        this.mapClicked.emit(event);
    }
}
