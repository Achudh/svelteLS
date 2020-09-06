<script>
  import State from "../stores/storeData.js";
  let nodeUrl;
  function login(account) {
    $State.login = !$State.login;
  }
</script>

Home
<button type="submit" on:click={login}>Logout</button>
