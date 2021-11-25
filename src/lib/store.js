// https://www.davidwparker.com/posts/dark-mode-in-sveltekit-with-and-without-javascript

import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
    const { subscribe, set } = writable(startValue);

    return {
        subscribe,
        set,
        useLocalStorage: () => {
            const json = localStorage.getItem(key);
            if (json) {
                set(JSON.parse(json));
            }

            subscribe(current => {
                localStorage.setItem(key, JSON.stringify(current));
            });
        }
    };
}

export const lang = createWritableStore('lang', 'en');