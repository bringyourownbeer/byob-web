import { writable } from 'svelte/store';
import { browser } from '$app/env';

const DEFAULT_PAGE_LANGUAGE = "de";

export const getBrowserLang = () => {
    if (browser) {
        return window.navigator.language.substring(0, 2) ?? DEFAULT_PAGE_LANGUAGE;
    }
    return DEFAULT_PAGE_LANGUAGE;
}

//const storedLang = localStorage.getItem(`byob-lang`);
export const lang = writable(getBrowserLang());
lang.subscribe(value => {
    if (browser && window.localStorage) {
        window.localStorage.setItem(`byob-lang`, value)
    }
})