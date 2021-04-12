/* eslint-disable id-blacklist */

// Make sure this is treaded as a module
export { };

declare global {
    // Normal prototype overrides go here

    interface String {
        test(): void;
    }
}

declare module '@angular/forms' {
    interface FormControl {
        nativeElement: HTMLElement;
        getNativeElement(): HTMLElement;
        setNativeElement(element: HTMLElement): void;
    }
}
