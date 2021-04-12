import { Component, Input } from '@angular/core';
import { AlertController, IonItemSliding } from '@ionic/angular';

import { Inquiries, Inquiry } from '../../../shared/models/inquiry';

@Component({
    selector: 'app-watchlist',
    templateUrl: './watch-list.component.html'
})
export class WatchlistComponent {
    @Input() watchlist: Inquiries = [];

    constructor(public readonly alertController: AlertController) {
    }

    public toggleState(sliding: IonItemSliding): void {
        sliding.open('end');
    }

    async remove(inquiry: Inquiry, index: number): Promise<void> {
        await this.presentAlertConfirm(inquiry, index);
    }

    private async presentAlertConfirm(inquiry: Inquiry, index: number) {
        const alert = await this.alertController.create({
            header: 'Are you sure',
            message: `Remove Inquiry <strong>${inquiry.additional}</strong>?`,
            buttons: [{
                text: 'Yes',
                handler: () => {
                    this.watchlist.splice(index, 1);
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
