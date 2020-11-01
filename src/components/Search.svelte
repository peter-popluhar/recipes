<script>
	import PrismicDOM from "prismic-dom";
	import {itemsArray} from './../stores'
	
	export let filtered;

	let input = undefined;
	let value = ""

	$: filtered = $itemsArray.filter(item =>
			item.data.title[0].text.toLowerCase().includes(value.toLowerCase())
	);


</script>

<input bind:this="{input}" type="search" bind:value/>

<ul>
	{#each filtered as item}
		<li>
			<a href={`/${item.uid}`}>
				{PrismicDOM.RichText.asText(item.data.title)}
			</a>
		</li>
	{/each}
</ul>
