import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service';

@Component({
    selector: 'app-lessor-side-menu',
    templateUrl: './lessor-side-menu.component.html'
})
export class LessorSideMenuComponent implements OnInit {

    @Input() enabled: boolean;

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService
    ) { }

    ngOnInit(): void { }

    navigate(route: string): void {
        // TODO: Check the user type
        this.router.navigateByUrl(route);
    }

    logout(): void {
        this.authService.logout();
    }
}
