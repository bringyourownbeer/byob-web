<script context="module">
  import { base } from "$app/paths";

  export async function load({ params, fetch }) {
    const lang = params.lang;
    const md = params.md;
    const mdPage = await fetch(`${base}/${lang}/${md}.json`).then((r) => r.json());
    return {
      props: { mdPage },
    };
  }
</script>

<script>
  export let mdPage;
</script>

<svelte:head>
  <title>{mdPage.metadata.title}</title>
</svelte:head>

<h1 class="title">{mdPage.metadata.title}</h1>
<p class="info">...</p>
{@html mdPage.content}

<style lang="scss">
  h1.title {
    margin-bottom: 0;
  }
</style>
