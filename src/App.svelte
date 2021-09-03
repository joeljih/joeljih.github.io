<script>
	//export let name;
	let success = "it's alive";
</script>

<main>
	<h1> This sucks </h1>
    <p> Hello {success} </p>
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
p{
		font-family:'Times New Roman', Times, serif;
		font-size: 2em;
		color: red;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>