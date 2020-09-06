<script>
  import State from "./stores/storeData.js";
  import Auth from "./pages/Auth.svelte";
  import Home from "./pages/Home.svelte";
</script>

<main>
  {#if $State.login}
    <Auth />
  {/if}
  {#if !$State.login}
    <Home />
  {/if}

</main>
