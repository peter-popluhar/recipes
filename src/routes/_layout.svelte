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
	import Nav from '../components/Nav.svelte';
	export let segment;
	export let items

	let categories = items.map(item => item.data.category)
	let links = [...new Set(categories)]

</script>

<style type="text/scss" global>
	@import "./../style/global.scss";
	
	main {
		padding-top: 96px;
	}

</style>

<Nav {segment} {links} />

<main>
	<div class="container">
		<slot></slot>
	</div>
</main>