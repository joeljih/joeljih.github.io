<script>
	//export let name;
	let success = "it's alive";
</script>

<main>
	<h1> Testing 123 </h1>
	<p> Bob is {success} </p>
	<p> Seriously </p>
	<h1> Pew pew  </h1>
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