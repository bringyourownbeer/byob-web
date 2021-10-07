import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

export const locale = writable("en");

export function switchLocale(newLocale) {
    let path = location.pathname.split('/');
    if (path[1] && (path[1] == "en" || path[1] == "de")) {
        path[1] = newLocale;
        locale.set(newLocale);
    }
    goto(`${path.join("/")}`, { replaceState: true, noscroll: true, keepfocus: true })
}