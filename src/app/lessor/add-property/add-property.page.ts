import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { GenericValidator, markAsTouchDeep } from 'ng-form-validator-builder';

import { convertToFormArray } from '../../shared/extensions';
import { scrollToInvalidFormItem } from '../../shared/inputs/form-utils';
import { SelectOption, SelectOptions } from '../../shared/inputs/select/select-option';
import { MultiValidator } from '../../shared/validation/multi-validator';

@Component({
    selector: 'app-lessor-add-property',
    templateUrl: './add-property.page.html',
})
export class LessorAddPropertyPage implements OnInit {

    form: FormGroup;
    cities: SelectOptions = [
        new SelectOption('City 1', 'city 1'),
        new SelectOption('City 2', 'city 2'),
        new SelectOption('City 3', 'city 3')
    ];

    countries: SelectOptions = [
        new SelectOption('Botswana', 'Botswana'),
        new SelectOption('Mauritius', 'Mauritius'),
        new SelectOption('Namibia', 'Namibia'),
        new SelectOption('South Africa', 'South Africa'),
        new SelectOption('Zambia', 'Zambia'),
    ];

    propertyTypes: SelectOptions = [
        new SelectOption('Type 1', 'type1'),
        new SelectOption('Type 2', 'type2'),
        new SelectOption('Type 3', 'type3'),
        new SelectOption('Type 4', 'type4'),
    ];

    areaToRent: SelectOptions = [
        new SelectOption('Area 1', 'area1'),
        new SelectOption('Area 2', 'area2'),
        new SelectOption('Area 3', 'area3'),
        new SelectOption('Area 4', 'area4'),
    ];

    roomAmenities: SelectOptions = [
        new SelectOption('None', 'none'),
        new SelectOption('Amenity 1', 'amenity1'),
        new SelectOption('Amenity 2', 'amenity2'),
        new SelectOption('Amenity 3', 'amenity3'),
        new SelectOption('Amenity 4', 'amenity4'),
    ];

    equipment: SelectOptions = [
        new SelectOption('Yes', 'yes'),
        new SelectOption('No', 'no')
    ];

    propertyUses: SelectOptions = [
        new SelectOption('Business', 'Business'),
        new SelectOption('Personal', 'Personal')
    ];

    furnished: SelectOptions = [
        new SelectOption('Yes', 'yes'),
        new SelectOption('No', 'no')
    ];

    amenities: SelectOptions = [
        new SelectOption('None', 'none'),
        new SelectOption('Amenity 1', 'amenity1'),
        new SelectOption('Amenity 2', 'amenity2'),
        new SelectOption('Amenity 3', 'amenity3'),
        new SelectOption('Amenity 4', 'amenity4'),
    ];

    listingTypes: SelectOptions = [
        new SelectOption('Type 1', 'type1'),
        new SelectOption('Type 2', 'type2'),
        new SelectOption('Type 3', 'type3'),
        new SelectOption('Type 4', 'type4'),
    ];

    approvalStatus: SelectOptions = [
        new SelectOption('Status 1', 'status1'),
        new SelectOption('Status 2', 'status2'),
        new SelectOption('Status 3', 'status3'),
        new SelectOption('Status 4', 'status4'),
    ];


    images: string[] = [
        '/assets/images/room 1.jpg',
        '/assets/images/room 2.jpg',
    ];



    constructor(private readonly alertController: AlertController,
        private readonly toastController: ToastController) {
        this.intializeForm();
    }

    ngOnInit() {
    }

    addProperty(): void {
        console.log(this.form);

        if (this.form.invalid) {
            markAsTouchDeep(this.form);
            scrollToInvalidFormItem(this.form);
            return;
        }
    }

    async remove(imageIndex: number): Promise<void> {
        const alert = await this.alertController.create({
            header: 'Are you sure',
            message: 'Remove image?',
            buttons: [{
                text: 'Yes',
                handler: () => {
                    this.images.splice(imageIndex, 1);
                }
            },
            {
                text: 'No',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => { }
            }
            ]
        });

        await alert.present();
    }

    upload(): void {
        this.presentToast('This will be done via Camera/File upload');
        this.images.push('/assets/images/room 3.jpg');
    }

    private async presentToast(message: string): Promise<void> {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        toast.present();
    }

    private intializeForm() {
        this.form = new FormBuilder().group({
            propertyName: [''],
            mapAddress: [],
            address: ['', GenericValidator.isRequired('Address is required')],
            city: [convertToFormArray(this.cities), MultiValidator.isRequired('City is required')],
            country: [convertToFormArray(this.countries), MultiValidator.isRequired('Country is required')],
            propertyType: [convertToFormArray(this.propertyTypes), MultiValidator.isRequired('Property Types are required')],
            areaToRent: [convertToFormArray(this.areaToRent), MultiValidator.isRequired('Areas to rent are required')],
            roomNumber: ['' , GenericValidator.isRequired('Room Number is required')],
            roomAmenities: [convertToFormArray(this.roomAmenities), MultiValidator.isRequired('Room amenities are required')],
            equipment: [convertToFormArray(this.equipment), MultiValidator.isRequired('Equipment availability is required')],
            monthlyRent: ['', GenericValidator.isRequired('Monthly rent is required')],
            propertyUse: [convertToFormArray(this.propertyUses), MultiValidator.isRequired('Property uses are required')],
            propertyDescription: ['', GenericValidator.isRequired('Description is required')],
            furnished: [convertToFormArray(this.furnished), MultiValidator.isRequired('Furnished state is required')],
            amenities: [convertToFormArray(this.amenities), MultiValidator.isRequired('Amenities are required')],
            listingTypes: [convertToFormArray(this.listingTypes), MultiValidator.isRequired('Listing Types are required')],
            dateFrom: [new Date(), GenericValidator.isRequired('From date is required')],
            approvalStatus: [convertToFormArray(this.approvalStatus), MultiValidator.isRequired('Approval status is required')]
        });
    }
}
