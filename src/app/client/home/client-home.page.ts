import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-client-home',
    templateUrl: './client-home.page.html',
})
export class ClientHomePage implements OnInit {
    form: FormGroup;

    constructor(private readonly router: Router) {
        this.initializeForm();
    }

    public ngOnInit(): void {
    }

    public route(path: string): void {
        this.router.navigateByUrl(path);
    }

    private initializeForm(): void {
        this.form = new FormBuilder().group({
            mapAddress: ['', []]
        });
    }
}
