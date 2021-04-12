/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prefer-arrow/prefer-arrow-functions */

import { isNullOrUndefined } from 'util';

export function scrollToElement(element: HTMLElement, options?: ScrollIntoViewOptions): void {
    const defaultOptions: any = { behavior: 'smooth', block: 'center', inline: 'nearest' };

    if (!isNullOrUndefined(options)) {
        Object.assign(defaultOptions, options);
    }

    element.scrollIntoView(defaultOptions);
}

export function scrollToTop(): void {
    window.scrollTo(0, 0);
}

export function animatedScroll(top: number, duration: number): Promise<void> {
    $('html, body').animate({ scrollTop: `${top}`, duration });

    return new Promise((resolve) => {
        setTimeout(() => resolve(), duration);
    });
}
