import { process } from '$lib/markdown';
import fs from 'fs';
import dayjs from 'dayjs';

export function get({ params }) {
    const { lang } = params;
    let posts = fs.readdirSync(`content/news`)
        .filter(fileName => /.+\.md$/.test(fileName))
        //.filter(fileName => new RegExp("\." + storeGet(locale) + "\.").test(fileName))
        .map(fileName => {
            const { metadata } = process(`content/news/${fileName}`);
            return {
                metadata,
                lang: fileName.slice(-5, -3),
                slug: fileName.slice(0, -6)
            };
        })
        .filter(post => post.lang === lang)
    // sort the posts by create date.

    posts.sort((a, b) => (dayjs(a.metadata.date, "MMM D, YYYY") -
        dayjs(b.metadata.date, "MMM D, YYYY")));
    let body = JSON.stringify(posts);

    return {
        body
    }
}