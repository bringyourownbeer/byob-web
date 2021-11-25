import { writable } from 'svelte/store';
import { goto } from '$app/navigation';


let browserLang = (() => {
    if (typeof window != "undefined") {
        return window.navigator.language.substr(0, 2) ?? "en";
    }
    return "en";
})()


export const locale = typeof localStorage === 'undefined' ? writable(browserLang) : writable(localStorage.getItem("byob-lang") ?? browserLang);
if (typeof localStorage !== 'undefined') {
    locale.subscribe(val => localStorage.setItem("byob-lang", val))
}

export function switchLocale(newLocale) {
    let path = location.pathname.split('/');
    if (path[1] && (path[1] == "en" || path[1] == "de")) {
        path[1] = newLocale;
        locale.set(newLocale);
    }
    goto(`${path.join("/")}`, { replaceState: true, noscroll: true, keepfocus: true })
}