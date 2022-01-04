<script context="module">
  export const ssr = false;

  import { base } from "$app/paths";

  export async function load({ params, fetch }) {
    const lang = params.lang;

    // invalid language
    if (lang !== "de" && lang !== "en") {
      return {
        status: 302,
        redirect: `/`,
      };
    }

    const homePage = await fetch(`${base}/${lang}/home.json`).then((r) => r.json());
    return {
      props: { homePage, lang },
    };
  }
</script>

<script>
  export let homePage;
  export let lang;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div>
  <h1>SvelteKit Blog</h1>
  {@html homePage.content}

  <a sveltekit:prefetch href="{base}/{lang}/news">News</a>
</div>

<style lang="scss">
  h1 {
    margin-bottom: 0;
  }

  h2.title {
    margin-top: 32px;
    margin-bottom: 0;

    &:hover {
      color: #40b3ff;
    }
  }

  p {
    color: #555;
    margin: 0;
  }
</style>
