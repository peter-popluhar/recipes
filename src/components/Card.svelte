<script lang="ts">
  import { Client, linkResolver } from "../../prismic-config.js";
  import PrismicDOM from "prismic-dom";
  export let card: any;

  const { title, category } = card.data;
</script>


  <a rel="prefetch" href={linkResolver(card)}>
    {PrismicDOM.RichText.asText(title)}
  </a>

