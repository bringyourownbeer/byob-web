// Redirect / to /lang
import { locale } from "$lib/i18n";
import { get as storeGet } from 'svelte/store';

export async function get() {
    return {
        headers: { Location: `${storeGet(locale)}` },
        status: 302
    }
}
