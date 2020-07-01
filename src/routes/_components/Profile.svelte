<script>
  export let profile;
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<div class="homepage page">
  <!-- <span>{profile.firstname}</span>
  <span>{profile.surname}</span>
  <span>{profile.age}</span> -->

  <!-- <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <div class="flex justify-center md:justify-end -mt-16">
      <img
        class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
        src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
    </div>
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
      <p class="mt-2 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
        deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
        commodi hic, suscipit in a veritatis pariatur minus consequuntur!
      </p>
    </div>
    <div class="flex justify-end mt-4">
      <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
    </div>
  </div> -->
</div>

<div class="insta-clone">

  <!--body start-->
  <!--profile data-->
  <div class="bg-white h-auto">
    <div class="flex md:flex-row flex-wrap xl:px-48">
      <div class="w-full md:w-3/4 p-4 text-center">
        <div class="text-left pl-4 pt-3">
          <div class="flex justify-center md:justify-start xl:mt-8">
            <img
              class="w-20 h-20 xl:w-48 xl:h-48 object-cover rounded-full
              border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar" />
            <div>
              <div
                class="ml-10 xl:ml-20 xl:-mr-64 mt-2 xl:mt-0 grid divide-y
                divide-gray-700">
                <div class="text-sm xl:text-xl">Информация профиля</div>
                <div />
              </div>
              <div
                class="text-base md:text-xl lg:text-3xl xl:text-5xl
                text-gray-700 ml-10 xl:ml-20 mr-2 -pt-8 -mt-4 xl:-mt-8">
                {profile.firstname} {profile.surname}, {profile.age}
                <span class="text-base font-semibold text-gray-700">
                  <a href="profile/edit">
                    <button
                      class="p-1 border-transparent text-gray-700 rounded-full
                      hover:text-blue-600 focus:outline-none focus:text-gray-600"
                      aria-label="Notifications">
                      <svg
                        class="h-4 w-4 xl:h-8 xl:w-8 mt-8 xl:mt-16"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724
                          1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37
                          2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924
                          0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826
                          3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426
                          1.756-2.924 1.756-3.35 0a1.724 1.724 0
                          00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724
                          1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924
                          0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31
                          2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <!-- <span class="text-base font-semibold text-gray-700 mr-2">
            <button
              class="bg-transparent hover:bg-blue-500 text-gray-700
              font-semibold hover:text-white py-2 px-4 border border-gray-600
              hover:border-transparent rounded">
              Edit Profile
            </button>
          </span> -->
        </div>

      </div>

    </div>

    <!--status show icon-->

  </div>
</div>
