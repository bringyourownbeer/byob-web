<script context="module">
  import { base } from "$app/paths";

  export async function load({ page, fetch }) {
    const lang = page.params.lang;
    const posts = await fetch(`${base}/${lang}/news/preview.json`).then((r) => r.json());
    return {
      props: { posts, lang },
    };
  }
</script>

<script>
  export let posts;
  export let lang;
</script>

<svelte:head>
  <title>News</title>
</svelte:head>

<div>
  <h1>News</h1>
  <p class="info">{posts.length} posts {lang}.</p>
  {#each posts as post}
    <a sveltekit:prefetch href={`${base}/${lang}/news/${post.slug}`}>
      <h2 class="title">{post.metadata.title}</h2>
      <p>{post.metadata.date}</p>
      <p>{post.metadata.excerpt}</p>
    </a>
  {/each}
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
