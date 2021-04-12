export type Steps = Step[];

export class Step {
    heading: string;
    secondaryHeading: string;
    icon: string;

    active: boolean;
    done: boolean;

    constructor(init?: Partial<Step>) {
        Object.assign(this, init);
    }
}
