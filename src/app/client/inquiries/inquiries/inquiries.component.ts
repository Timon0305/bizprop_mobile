import { Component, Input } from '@angular/core';
import { AlertController, IonItemSliding } from '@ionic/angular';

import { Inquiries, Inquiry } from '../../../shared/models/inquiry';

@Component({
    selector: 'app-inquiries',
    templateUrl: './inquiries.component.html'
})
export class InquiriesComponent {

    @Input() inquiries: Inquiries = [];

    constructor(public readonly alertController: AlertController) {
        this.initializeInquiries();
    }

    public toggleState(sliding: IonItemSliding): void {
        sliding.open('end');
    }

    async remove(inquiry: Inquiry, index: number): Promise<void> {
        await this.presentAlertConfirm(inquiry, index);
    }

    private initializeInquiries(): void {
        this.inquiries = [
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.11.11' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.10.10' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.09.09' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.08.08' }),
            new Inquiry({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.07.07' }),
        ];
    }

    private async presentAlertConfirm(inquiry: Inquiry, index: number) {
        const alert = await this.alertController.create({
            header: 'Are you sure',
            message: `Remove Inquiry <strong>${inquiry.additional}</strong>?`,
            buttons: [{
                text: 'Yes',
                handler: () => {
                    this.inquiries.splice(index, 1);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                    console.log('Confirm Cancel: blah');
                }
            }
            ]
        });

        await alert.present();
    }

}
