<script>
  import { goto, stores } from "@sapper/app";
  import axios from "axios";

  const { session } = stores();

  let user = { username: "", password: "" };
  let inProgress = false;
  let error = null;

  async function submit() {
    try {
      inProgress = true;
      const response = await axios.post("/auth/register", user);
      $session.user = response.data;
      inProgress = false;
      error = null;
      user = { username: "", password: "" };
      goto("/");
    } catch (err) {
      error = err.response.data.message;
      inProgress = false;
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");
</style>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<link
  href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"
  rel="stylesheet" />
<div class="w-full flex flex-wrap">

  <!-- Login Section -->

  <div class="max-w-xl mx-auto px-2 py-5">
    <div
      class="flex flex-col justify-center md:justify-start my-auto pt-0 md:pt-8
      px-2 md:px-24 lg:px-32 font-medium">
      <p class="text-center text-xl lg:text-3xl">Зарегистрироваться</p>
      <form
        class="flex flex-col pt-3 md:pt-8"
        on:submit|preventDefault={submit}>
        {#if error}
          <span class="error-message">{error}</span>
        {/if}
        <div class="flex flex-col pt-0 ">
          <label class="text-base lg:text-xl">Login</label>
          <input
            bind:value={user.username}
            type="text"
            placeholder="username"
            required
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700
            mt-1 lg:mt-2 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div class="flex flex-col pt-4">
          <label class="text-base lg:text-xl">Password</label>
          <input
            bind:value={user.password}
            type="password"
            placeholder="password"
            required
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700
            mt-1 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <button
          type="submit"
          value="Log In"
          class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2
          mt-8 rounded"
          disabled={inProgress}>
          Sign up
        </button>
      </form>
      <div class="text-center text-sm lg:text-base pt-8">
        <p>
          Have an account?
          <a href="/login" class="underline font-bold">Log in here.</a>
        </p>
      </div>
    </div>

  </div>
</div>

<!-- <div
  class="bg-white rounded-t-lg overflow-hidden p-4 px-3 py-10 flex
  justify-center">
  <div class="w-full max-w-xs ">
    <form
      class="bg-white shadow-lg rounded px-8 pt-6 pb-6 mb-0"
      on:submit|preventDefault={submit}>
      {#if error}
        <span class="error-message">{error}</span>
      {/if}
      <div class="divide-y divide-black">
        <div class="bg-white rounded-t-lg overflow-hidden p-0 text-center">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Зарегистрироваться
          </label>
        </div>
        <div />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          bind:value={user.username}
          type="text"
          placeholder="username"
          required />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          bind:value={user.password}
          type="password"
          placeholder="password"
          required />
        <div class=" bg-white rounded-t-lg overflow-hidden p-6 text-center">
          <button
            class="inline-block align-baseline text-sm px-4 py-2 leading-none
            border rounded text-black border-black hover:border-transparent
            hover:text-teal-500 hover:bg-black mt-4 lg:mt-0"
            disabled={inProgress}>
            SIGN UP
          </button>
        </div>
      </div>
    </form>
  </div>
</div> -->
