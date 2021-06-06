<script>
  import Header from "../components/Header.svelte";
  export let segment;
</script>

<Header {segment} />

<main>
  <slot />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    width: 75%;
  }
</style>
