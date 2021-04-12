export type Rentals = Rental[];
export class Rental {
    image: string;
    heading: string;
    additional: string;
    
    constructor(init?: Partial<Rental>) {
        Object.assign(this, init);
    }
}
