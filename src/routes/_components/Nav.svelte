<script>
  import { goto, stores } from "@sapper/app";
  import axios from "axios";
  import "../../../static/nav.css";

  const { session } = stores();

  async function logout() {
    await axios.post("/auth/logout");
    $session.user = null;
    goto("/");
  }
</script>

<nav class="flex items-center justify-between flex-wrap bg p-4">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a class="logo font-semibold text-base lg:text-xl tracking-tight" href="/">
      PsychoTrack
    </a>
  </div>
  <div class="navbar-right text-white">
    {#if $session.user}
      <span class="username">
        <a
          href="/profile"
          class="navbar-link inline-block text-xs lg:text-sm px-4 py-2
          leading-none border rounded text-white border-white
          hover:border-transparent hover:text-teal-500 hover:bg-white mt-4
          lg:mx-2 lg:mt-0">
          {$session.user.username}
        </a>
        <span
          class="navbar-link inline-block text-xs lg:text-sm px-4 py-2
          leading-none border rounded text-white border-white
          hover:border-transparent hover:text-teal-500 hover:bg-white mt-4
          lg:mx-2 lg:mt-0"
          on:click={logout}>
          logout
        </span>
      </span>
    {:else}
      <a
        class="navbar-link inline-block text-sm px-4 py-2 leading-none border
        rounded text-white border-white hover:border-transparent
        hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        href="/login">
        Log in
      </a>
      <a
        class="navbar-link inline-block text-sm px-4 py-2 leading-none border
        rounded text-white border-white hover:border-transparent
        hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        href="/signup">
        Sign up
      </a>
    {/if}
  </div>
</nav>
