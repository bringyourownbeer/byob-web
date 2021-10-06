<script context="module">
  import { base } from "$app/paths";

  export async function load({ page, fetch }) {
    const lang = page.params.lang;
    const md = page.params.md;
    const aboutPage = await fetch(`${base}/${lang}/${md}.json`).then((r) => r.json());
    return {
      props: { aboutPage },
    };
  }
</script>

<script>
  export let aboutPage;
</script>

<svelte:head>
  <title>{aboutPage.metadata.title}</title>
</svelte:head>

<h1 class="title">{aboutPage.metadata.title}</h1>
<p class="info"><a href="https://github.com/zhuzilin">zhuzilin</a></p>
{@html aboutPage.content}

<style lang="scss">
  h1.title {
    margin-bottom: 0;
  }
</style>
