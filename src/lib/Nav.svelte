<script>
  import { base } from "$app/paths";
  import { locale } from "$lib/i18n";
</script>

<div>
  <nav>
    <a href="{base}/"><h3 class="home">HOME</h3></a>
    <a href="{base}/{$locale}/about"><h3 class="about">about</h3></a>
  </nav>
</div>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    margin-bottom: 0px;
    &.home {
      color: #444;
    }
    &.about {
      color: #ff3e00;
    }
  }
</style>
