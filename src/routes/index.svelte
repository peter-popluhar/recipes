<script context="module">
  import Prismic from "prismic-javascript";
  import { Client } from "../../prismic-config.js";

  let items = null;

  export async function preload({ params, query }) {
    const postResponse = await Client.query(
      Prismic.Predicates.at("document.type", "card")
    );

    items = postResponse.results;

    if (items) {
      return { items };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
<<<<<<< HEAD
  import MediaBox from './../components/media-box/media-box.svelte'
  export let items;
</script>

<style type="text/scss">
  @import './../components/article-list/article-list.scss';
</style>

<div class="container">
  <ul>
    {#each items as item, i}
    <li>
      <MediaBox data={item} />
    </li>
    {/each}
  </ul>
</div>
=======
  import Card from "./../components/Card.svelte";
  import Search from "./../components/Search.svelte";

  export let cards;
</script>

<ul>
  {#each cards as card, i}
  <li>
    <Card card={card} />
  </li>
  {/each}
</ul>

<Search data={cards} let:filtered />
>>>>>>> main
