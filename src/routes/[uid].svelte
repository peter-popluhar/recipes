<script context="module">
  import PrismicDOM from "prismic-dom";
  import { Client, linkResolver } from "../../prismic-config";

  let card = null;

  export async function preload({ params, query }) {
    const uid = params.uid;
    card = await Client.getByUID("card", uid);

    if (card) {
      return { card };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>

  export let card;
  const {image, title, source } = card.data;
  console.log(card.data)
</script>

<p>{PrismicDOM.RichText.asText(title)}</p>
Originall Source: <a href="{source.url}" target="_blank">here</a>
<img src="{image.url}" alt="">
<p>Ingredients:</p>

