export type SelectOptions = SelectOption[];

export class SelectOption {
    constructor(public display: string, public value: string, public selected: boolean = false) { }
}
