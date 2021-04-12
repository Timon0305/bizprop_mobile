import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-verify',
    templateUrl: './verify.page.html',
    styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

    public showSpinner: boolean = false;

    private pin: string;

    constructor(private readonly router: Router,
        private toastController: ToastController,
        public loadingController: LoadingController) { }

    ngOnInit(): void {
    }

    onPinChanged(pin: string): void {
        this.pin = pin;
    }

    async verify(): Promise<void> {
        const loader = await this.loadingController.create({
            message: 'Verifying...',
        });

        loader.present();
        console.log(this.pin);

        // Wait a while for the sake of verification
        setTimeout(() => {
            loader.dismiss();
            this.presentToast('Verified! Please log in to continue.');
            setTimeout(() => {
                this.router.navigate(['/auth/login']);
            }, 500);
        }, 750);

    }

    async presentToast(message: string): Promise<void> {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        toast.present();
    }
}
