import { process } from '$lib/markdown';

export function get({ params }) {
    const { lang, md } = params;

    const { metadata, content } = process(`content/${md}/${md}.${lang}.md`);
    const body = JSON.stringify({ metadata, content });

    return {
        body
    }
}