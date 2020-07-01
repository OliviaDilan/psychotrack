<script>
  import { goto, stores } from "@sapper/app";
  import * as api from "api";

  const { session } = stores();

  export let profile;
  if (!profile) {
    profile = {};
  }
  let inProgress = false;
  async function submit() {
    inProgress = true;
    profile._id
      ? await api.profile.updateProfile({
          profile: profile,
          token: $session.user.token
        })
      : await api.profile.createProfile({
          profile: profile,
          token: $session.user.token
        });
    goto(`/profile`);
  }
</script>

<link
  rel="stylesheet"
  href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" />

<div class="max-w-md text-sm lg:text-xl mx-auto px-8 py-5">
  <div x-show.transition.in="step === 1">
    <div class="mb-5 text-center">
      <div
        class="mx-auto w-16 h-16 lg:w-32 lg:h-32 mb-2 border rounded-full
        relative bg-gray-100 mb-4 shadow-inset">
        <img
          id="image"
          class="object-cover w-16 h-16 lg:w-32 lg:h-32 rounded-full"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar" />
      </div>

      <label
        for="fileInput"
        type="button"
        class="cursor-pointer inine-flex justify-between items-center
        focus:outline-none border py-1 px-2 rounded-xl shadow-sm text-left
        text-gray-600 bg-white hover:bg-gray-100 font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          <rect x="0" y="0" width="24" height="24" stroke="none" />
          <path
            d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2
            2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1
            2 -2" />
          <circle cx="12" cy="13" r="3" />
        </svg>
        Browse Photo
      </label>

      <div
        class="mx-auto w-48 text-gray-500 text-xs lg:text-sm text-center mt-1">
        Click to change profile picture
      </div>

      <input
        name="photo"
        id="fileInput"
        accept="image/*"
        class="hidden"
        type="file" />
    </div>

    <form class="profile-form" on:submit|preventDefault={submit}>

      <div class="mb-2 lg:mb-5">
        <label for="firstname" class="font-bold mb-1 text-gray-700 block">
          Firstname
        </label>
        <input
          type="text"
          class="appearance-none border rounded w-full px-2 py-1 text-gray-700
          mt-1 lg:mt-2 leading-tight focus:outline-none focus:shadow-outline"
          bind:value={profile.firstname}
          required
          placeholder="Enter your firstname..." />
      </div>

      <div class="mb-2 lg:mb-5">
        <label for="surname" class="font-bold mb-1 text-gray-700 block">
          Surname
        </label>
        <input
          type="text"
          class="appearance-none border rounded w-full px-2 py-1 text-gray-700
          mt-1 lg:mt-2 leading-tight focus:outline-none focus:shadow-outline"
          bind:value={profile.surname}
          required
          placeholder="Enter your surname..." />
      </div>

      <div class="mb-5 lg:mb-5">
        <label for="age" class="font-bold mb-1 text-gray-700 block">Age</label>
        <input
          class="appearance-none border rounded w-full px-2 py-1 text-gray-700
          mt-1 lg:mt-2 leading-tight focus:outline-none focus:shadow-outline"
          bind:value={profile.age}
          type="number"
          required
          placeholder="Enter your age..." />
      </div>
      <div class="flex justify-center items-center">
        <button
          class="w-full primary-button submit-button btn-primary transition
          duration-300 ease-in-out focus:outline-none focus:shadow-outline
          bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4
          mr-1 rounded"
          disabled={inProgress}>
          Update
        </button>
      </div>
    </form>
  </div>
</div>
