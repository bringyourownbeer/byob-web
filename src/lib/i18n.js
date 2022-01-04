import { goto } from '$app/navigation';
import { lang } from './store'


export function setLang(newLang) {
    const allowedLanguages = ["en", "de"]

    let path = location.pathname.split('/');
    const langInPath = path[1];

    if (langInPath && allowedLanguages.includes(langInPath)) {
        path[1] = newLang;
        lang.set(newLang);
    }
    goto(`${path.join("/")}`, { replaceState: true, noscroll: true, keepfocus: true })
}