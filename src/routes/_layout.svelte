<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style type="text/scss" global>
	@import "./../style/global.scss";
	
	main {
		padding-top: 96px;
	}

</style>

<Nav {segment}/>

<main>
	<div class="container">
		<slot></slot>
	</div>
</main>