<script>
  import Nav from "./_components/Nav.svelte";
  import Tailwind from "./_components/Tailwind.svelte";
  import LoadingBar from "./_components/LoadingBar.svelte";
</script>

<Tailwind />
<LoadingBar />
<Nav />

<main>
  <slot />
</main>
