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
  export let ingredientsSlices = [];
  export let instructions = [];
  import Search from "./../components/Search.svelte";

  const {image, title, source, category, body } = card.data;

  body.map(item => {
    switch (item.slice_type) {
      case 'ingredients': ingredientsSlices.push(item)
        break;
      case 'instructions': instructions.push(item)
    }
  })

  // console.log(instructions)
  
</script>
<Search /> 
<p>{PrismicDOM.RichText.asText(title)}</p>
<p>in category:{category}</p>
<p> Originall Source: <a href="{source.url}" target="_blank">here</a></p>
<img src="{image.url}" alt="test">

<p>Ingredients:</p>
<ul>
  {#each ingredientsSlices as slice}
  <li>
    {PrismicDOM.RichText.asText(slice.primary.title1)}
    <ul>
      {#each slice.primary.items as {text}}
        <li>
          {text}
        </li>
      {/each}
    </ul>
  </li>
  {/each}
</ul>

<p>instructions:</p>
<ul>
  {#each instructions as instruction}
      {#each instruction.primary.instructions as {text}}
        <li>
          {text}
        </li>
      {/each}
  {/each}
</ul>
