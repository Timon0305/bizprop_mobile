import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-client',
    templateUrl: './client.page.html'
})
export class ClientPage {

    get homeSelected(): boolean {
        return this.router.url === '/client/home';
    }

    get profileSelected(): boolean {
        return this.router.url === '/client/profile';
    }

    get notificationsSelected(): boolean {
        return this.router.url === '/client/notifications';
    }

    get settingsSelected(): boolean {
        return this.router.url === '/client/settings';
    }

    constructor(private readonly router: Router) {

    }

    public route(path: string): void {
        this.router.navigateByUrl(path);
    }
}
