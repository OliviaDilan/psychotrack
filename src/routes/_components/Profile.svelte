<script>
  export let profile;
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<div class="homepage page">
  <span>{profile.firstname}</span>
  <span>{profile.surname}</span>
  <span>{profile.age}</span>
</div>
