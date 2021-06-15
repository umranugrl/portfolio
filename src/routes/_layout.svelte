<script>
  import Header from "../components/Header.svelte";
  export let segment;
</script>

<Header {segment} />

<main class="w-full md:w-4/5">
  <slot />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  #sapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
  }
</style>
