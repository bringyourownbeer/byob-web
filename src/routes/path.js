// Redirect non-lang prefixed path to lang-prefixed path
import { locale } from "$lib/i18n";
import { get as storeGet } from 'svelte/store';

export async function get({ params }) {
    const { path } = params;

    return {
        headers: { Location: `${storeGet(locale)}/${path}` },
        status: 302
    }
}
