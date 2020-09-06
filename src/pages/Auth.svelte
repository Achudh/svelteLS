<script>
  import State from "../stores/storeData.js";
  let nodeUrl;
  function login(account) {
    $State.login = !$State.login;
  }
</script>

<style>
  input {
    width: 25%;
  }
</style>

<div>
  <label>
    Node URL
    <input placeholder={$State.nodeUrl} bind:value={$State.nodeUrl} />
  </label>
  <label>
    Account
    <input placeholder="{$State.account} " bind:value={$State.account} />
  </label>
  <button type="submit" on:click={login}>Login</button>
</div>
