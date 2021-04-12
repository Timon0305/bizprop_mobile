import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { InputBase } from '../input-base';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent extends InputBase implements OnInit, AfterViewInit {
    showPassword: boolean = false;

    get inputType(): string {
        return this.showPassword ? 'text' : 'password';
    }

    get containsText(): boolean {
        return this.formValue !== '';
    }

    ngOnInit(): void {
        this.runChecks();
        
        super.ngOnInit();
    }

    onIconClick(event: Event): boolean {
        this.showPassword = !this.showPassword;

        if (this.showPassword) {
            const index = this.cssClasses.findIndex(val => val === 'light-grey');
            this.cssClasses.splice(index, 1);
        } else {
            this.cssClasses.push('light-grey');
        }
        
        return super.onIconClick(event);
    }
}
