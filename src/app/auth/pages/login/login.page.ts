import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '@capacitor/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { GenericValidator, markAsTouchDeep, StringValidator } from 'ng-form-validator-builder';
import { tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { User } from '../../../shared/models/user/user';
import { UserType } from '../../../shared/models/user/user-type';
import { loginAction } from '../../auth.actions';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    form: FormGroup;
    nonBackground = 'red';

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly store: Store<AppState>,
        private readonly loadingController: LoadingController,
        private readonly toastController: ToastController,
    ) {

        this.initializeForm();
    }


    ngOnInit(): void {
    }

    async login(): Promise<void> {
        if (this.form.invalid) {
            markAsTouchDeep(this.form);
            return;
        }

        const loader = await this.loadingController.create({
            message: 'Logging in...',
        });

        loader.present();

        const username = this.form.get('username').value;
        const password = this.form.get('password').value;

        this.authService.login(username, password).pipe(
            tap((user: User) => {
                loader.dismiss();
                if (isNullOrUndefined(user)) {
                    this.presentToast('Username or password is incorrect');
                }
            })
        ).subscribe();
    }

    private async presentToast(message: string): Promise<void> {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        toast.present();
    }

    private initializeForm() {
        this.form = new FormBuilder().group({
            username: ['test@client.com', [
                GenericValidator.isRequired('Email is required'),
                StringValidator.email('Valid email is required')
            ]],
            password: ['12345', GenericValidator.isRequired('Password is required')]
        });
    }
}
