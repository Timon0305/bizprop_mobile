import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientSideMenuComponent } from './client-side-menu.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        ClientSideMenuComponent
    ],
    exports: [
        ClientSideMenuComponent
    ]
})
export class ClientSideMenuModule {

}
