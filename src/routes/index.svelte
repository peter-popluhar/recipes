<script context="module">
  import Prismic from "prismic-javascript";
  import PrismicDOM from "prismic-dom";
  import { Client, linkResolver } from "../../prismic-config.js";

  let cards = null;

  export async function preload({ params, query }) {
    const postResponse = await Client.query(
      Prismic.Predicates.at("document.type", "card")
    );

    cards = postResponse.results;

    if (cards) {
      return { cards };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Card from "./../components/Card.svelte";

  export let cards;
</script>

<ul>
  {#each cards as card, i}
  <li>
    <Card card={card} />
  </li>
  {/each}
</ul>
