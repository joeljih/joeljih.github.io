<script>
	export let name;
	let userName = "roberto";
</script>

<main>
	<h1> Hello this is an update </h1>
	<p> What a pain in the ass for {userName} </p>
	<p> Seriously </p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>