<script context="module">
  import { locale } from "$lib/i18n";
  import { get } from "svelte/store";

  const lang = get(locale);

  export async function load() {
    return {
      status: 302,
      redirect: `/${lang}`,
    };
  }
</script>

<svelte:head>
  <title>Bring Your Own Beer</title>
</svelte:head>

<div>
  <h1>Bring Your Own Beer</h1>
</div>
