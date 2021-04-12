import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-register-selection',
    templateUrl: './register-selection.page.html',
    styleUrls: ['./register-selection.page.scss'],
})
export class RegisterSelectionPage {
    constructor(private readonly router: Router,
        public toastController: ToastController) { }

    registerClient(): void {
        void this.router.navigate(['/auth/register-client']);
    }
    
    registerLessor(): void {
        void this.router.navigate(['/auth/register-lessor']);
    }

    async presentToast(message: string): Promise<void> {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        toast.present();
    }
}
