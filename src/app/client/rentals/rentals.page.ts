import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding } from '@ionic/angular';

import { Rental, Rentals } from '../../shared/models/rental';

@Component({
    selector: 'app-client-rentals',
    templateUrl: './rentals.page.html'
})
export class RentalsPage implements OnInit {

    rentals: Rentals = [];

    constructor(public readonly alertController: AlertController) {
        this.initializeRentals();
    }

    ngOnInit(): void {
    }

    public toggleState(sliding: IonItemSliding): void {
        sliding.open('end');
    }

    async remove(inquiry: Rental, index: number): Promise<void> {
        await this.presentAlertConfirm(inquiry, index);
    }

    private initializeRentals(): void {
        this.rentals = [
            new Rental({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.11.11' }),
            new Rental({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.10.10' }),
            new Rental({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.09.09' }),
            new Rental({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.08.08' }),
            new Rental({ image: '/assets/images/inquiry_image.png', heading: 'Room Name', additional: '2020.07.07' }),
        ];
    }

    private async presentAlertConfirm(inquiry: Rental, index: number) {
        const alert = await this.alertController.create({
            header: 'Are you sure',
            message: `Remove Inquiry <strong>${inquiry.additional}</strong>?`,
            buttons: [{
                text: 'Yes',
                handler: () => {
                    this.rentals.splice(index, 1);
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
