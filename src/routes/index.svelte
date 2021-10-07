<script context="module">
  import { locale } from "$lib/i18n";
  import { get as storeGet } from "svelte/store";

  export async function get() {
    return {
      headers: { Location: `${storeGet(locale)}` },
      status: 302,
    };
  }
</script>

<svelte:head>
  <title>Bring Your Own Beer</title>
</svelte:head>

<div>
  <h1>Bring Your Own Beer</h1>
</div>
