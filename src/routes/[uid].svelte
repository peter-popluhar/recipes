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
  const Elements = PrismicDOM.RichText.Elements;

  export let card;

  	
var htmlSerializer = function (type, element, content, children) {
  switch(type) {
 
    // Add a class to paragraph elements
    case Elements.listItem: 
      return '<li class="paragraph-class">' + children.join('') + '</li>';
 
    // Return null to stick with the default behavior
    default: 
      return null;
  }
};

  const {image, title, source, category, instructions, ingredientes } = card.data
  
</script>

<style>
  :global(.paragraph-class) {color: red}
</style>


<h1>{PrismicDOM.RichText.asText(title)}</h1>
<p>in category:{category}</p>
<p> Originall Source: <a href="{source.url}" target="_blank">here</a></p>

<h2>Ingredients:</h2>
{@html PrismicDOM.RichText.asHtml(ingredientes)}


<h2>Instructions:</h2>
{@html PrismicDOM.RichText.asHtml(instructions, linkResolver, htmlSerializer)}


<img src="{image.url}" alt="test">

