import { process } from '$lib/markdown';

export function get({ params }) {
    const { lang, slug } = params;

    const { metadata, content } = process(`content/news/${slug}.${lang}.md`);
    const body = JSON.stringify({ metadata, content });

    return {
        body
    }
}