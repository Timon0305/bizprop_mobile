import { Component, OnInit } from '@angular/core';
import { Notification, Notifications } from '../../shared/models/notification';

@Component({
    selector: 'app-client-notifications',
    templateUrl: './client-notifications.page.html'
})
export class ClientNotificationsPage implements OnInit {

    notifications: Notifications = [];

    constructor() { }

    ngOnInit(): void {
        this.notifications = [
            new Notification({ userName: 'Lucy Lee', userImage: '/assets/images/avatars/woman-1.jpg', subHeader: 'Requires more information', canMessage: true }),
            new Notification({ userName: 'Mike WIlson', userImage: '/assets/images/avatars/man-1.jpg', subHeader: 'Requested Property X', canMessage: false }),
            new Notification({ userName: 'Aaron Smith', userImage: '/assets/images/avatars/man-2.jpg', subHeader: 'Requires more information', canMessage: true }),
            new Notification({ userName: 'Sara Kowalski', userImage: '/assets/images/avatars/woman-2.jpg', subHeader: 'Requested Property X', canMessage: false }),
            new Notification({ userName: 'Sara Kowalski', userImage: '/assets/images/avatars/woman-2.jpg', subHeader: 'Requested Property X', canMessage: false }),
            new Notification({ userName: 'Mark Johnston', userImage: '/assets/images/avatars/man-3.jpg', subHeader: 'Requires more information', canMessage: true }),
            new Notification({ userName: 'Lucy Picklesworth', userImage: '/assets/images/avatars/woman-3.jpg', subHeader: 'Requested Property X', canMessage: false }),
        ];
    }

}
