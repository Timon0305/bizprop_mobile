import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register-lessor',
    templateUrl: './register-lessor.page.html',
})
export class RegisterLessorPage implements OnInit {
    personalDetailActive: boolean = true;
    personalDetailDone: boolean = false;

    businessDetailActive: boolean = false;
    businessDetailDone: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    goToBusinessDetail(): void {
        this.personalDetailActive = false;
        this.personalDetailDone = true;

        this.businessDetailActive = true;
    }
}
