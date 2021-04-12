import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lessor-home',
    templateUrl: './lessor-home.page.html',
})
export class LessorHomePage implements OnInit {

    constructor(private readonly router: Router) { }

    ngOnInit(): void {
    }

    public route(path: string): void {
        this.router.navigateByUrl(path);
    }

}
