<script>
	import PrismicDOM from "prismic-dom";
	export let data = [];
	export let filtered;

	let input = undefined;
	let value = ""

	$: filtered = data.filter(item =>
			item.data.title[0].text.toLowerCase().includes(value.toLowerCase())
	);


</script>

<input bind:this="{input}" type="search" bind:value/>

<ul>
	{#each filtered as item}
		<li>
			<a rel="prefetch" href="{item.uid}">
				{PrismicDOM.RichText.asText(item.data.title)}
			</a>
		</li>
	{/each}
</ul>
