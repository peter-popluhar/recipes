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
  import MediaBox from './../components/media-box/media-box.svelte'
  export let items;
</script>

<style type="text/scss">
  @import './../components/article-list/article-list.scss';
</style>


<ul>
  {#each items as item, i}
  <li>
    <MediaBox data={item} />
  </li>
  {/each}
</ul>

