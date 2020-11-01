<script>
	import PrismicDOM from "prismic-dom";
<<<<<<< HEAD
	import {itemsArray} from './../stores'
	
=======
	export let data = [];
>>>>>>> main
	export let filtered;

	let input = undefined;
	let value = ""

<<<<<<< HEAD
	$: filtered = $itemsArray.filter(item =>
=======
	$: filtered = data.filter(item =>
>>>>>>> main
			item.data.title[0].text.toLowerCase().includes(value.toLowerCase())
	);


<<<<<<< HEAD

=======
>>>>>>> main
</script>

<input bind:this="{input}" type="search" bind:value/>

<ul>
	{#each filtered as item}
		<li>
<<<<<<< HEAD
			<a href={`/${item.uid}`}>
=======
			<a rel="prefetch" href="{item.uid}">
>>>>>>> main
				{PrismicDOM.RichText.asText(item.data.title)}
			</a>
		</li>
	{/each}
</ul>
