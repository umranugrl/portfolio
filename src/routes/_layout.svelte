<script>
  import Header from "../components/Header.svelte";

  export let segment;
</script>

<Header {segment} />

<main>
  <slot />
</main>

<style>
  main{
    width: 75%;
  }
</style>
