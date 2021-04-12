export type Notifications = Notification[];

export class Notification {
    userImage: string;
    userName: string;

    subHeader: string;
    canMessage: boolean;

    constructor(init?: Partial<Notification>) {
        Object.assign(this, init);
    }
}
