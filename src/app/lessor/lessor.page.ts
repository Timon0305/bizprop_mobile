import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lessor',
    templateUrl: './lessor.page.html'
})
export class LessorPage {

    get homeSelected(): boolean {
        return this.router.url === '/lessor/home';
    }

    get profileSelected(): boolean {
        return this.router.url === '/lessor/profile';
    }

    get notificationsSelected(): boolean {
        return this.router.url === '/lessor/notifications';
    }

    get settingsSelected(): boolean {
        return this.router.url === '/lessor/settings';
    }

    constructor(private readonly router: Router) {

    }

    public route(path: string): void {
        this.router.navigateByUrl(path);
    }
}
