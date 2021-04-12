import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
    providedIn: 'root'
})
export class CachingService {

    constructor() { }

    set(key: string, value: any): void {
        const stringified = JSON.stringify(value);
        localStorage.setItem(key, stringified);
    }

    get<T>(key: string): T {
        const item = localStorage.getItem(key);

        if (!isNullOrUndefined(item)) {
            const strongTyped: T = JSON.parse(item) as T;
            return strongTyped;
        }
        return null;
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
