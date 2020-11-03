<script context="module">
  import PrismicDOM from "prismic-dom";
  import { Client, linkResolver } from "../../prismic-config";

  let item = null;

  export async function preload({ params, query }) {
    const uid = params.uid;
    item = await Client.getByUID("card", uid);

    if (item) {
      return { item };
    } else {
      this.error(res.status, data.message);
    }
  }

</script>

<script>
  import Label from "./../components/label/label.svelte";
  import {htmlSerializer} from './../utils/html-serializer'
  export let item;

  const {image, title, source, category, instructions, ingredientes } = item.data

</script>

<style type="text/scss">
  @import "./../style/media-queries.scss";

  h1 {
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 16px;
  }

  img {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .grid {
    @include lg {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }

  h1 {
    position: relative;
  }

</style>

<h1>{PrismicDOM.RichText.asText(title)} <Label text={category} ref="card" /></h1>

<div class="grid">
  <div>
    <h2>Ingredients:</h2>
    {@html PrismicDOM.RichText.asHtml(ingredientes,linkResolver, htmlSerializer)}
  </div>
  <div>
    <h2>Instructions:</h2>
    {@html PrismicDOM.RichText.asHtml(instructions, linkResolver, htmlSerializer)}
  </div>
</div>

<img src="{image.url}" alt="test">
<p> Original Source: <a href="{source.url}" target="_blank">here</a></p>
