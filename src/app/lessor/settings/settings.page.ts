import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../auth/services/auth.service';

@Component({
    selector: 'app-lessor-settings',
    templateUrl: './settings.page.html'
})
export class LessorSettingsPage implements OnInit {

    constructor(private readonly router: Router,
        private readonly authService: AuthService,
        private readonly alertController: AlertController) { }

    ngOnInit(): void {
    }

    public removeAccount(): void {
        this.presentAlertConfirm('Are you sure', 'Permanently remove your account?',
            () => {
                this.authService.logout();
                this.router.navigateByUrl('/auth/login');
            });
    }

    public logout(): void {
        this.presentAlertConfirm('Are you sure', 'log out of your account?',
            () => {
                this.authService.logout();
                this.router.navigateByUrl('/auth/login');
            });
    }

    private async presentAlertConfirm(
        heading: string,
        subHeading: string,
        yesAction: () => void = () => { },
        noAction: () => void = () => { }) {
        const alert = await this.alertController.create({
            header: heading,
            message: subHeading,
            buttons: [{
                text: 'Yes',
                handler: () => yesAction
            },
            {
                text: 'No',
                role: 'cancel',
                cssClass: 'secondary',
                handler: noAction
            }
            ]
        });

        await alert.present();
    }

}
