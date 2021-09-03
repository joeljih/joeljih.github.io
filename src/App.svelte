<script>
	//export let name;
	let success = "it's alive";
    let red = "red";

</script>

<main>
	<h1> This sucks </h1>
    <p class:red> Hello {success} </p>
</main>

<style>
	.red {color: red;}
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