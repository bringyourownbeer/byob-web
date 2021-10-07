<script context="module">
  import { base } from "$app/paths";

  export async function load({ page }) {
    const lang = page.params.lang;
    return {
      props: { lang },
    };
  }
</script>

<script>
  export let lang;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div>
  <h1>SvelteKit Blog</h1>
  <a href="{base}/{lang}/news">News</a>
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
