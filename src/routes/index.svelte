<script context="module">
  export const ssr = false;

  import { lang } from "$lib/store";
  import { get } from "svelte/store";

  export async function load() {
    return {
      status: 302,
      redirect: `/${get(lang)}`,
    };
  }
</script>

<svelte:head>
  <title>Bring Your Own Beer</title>
</svelte:head>

<div>
  <h1>Bring Your Own Beer</h1>
</div>
