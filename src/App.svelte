<script>
	//export let name;
	let success = "it's alive";
    let red = "red";
	let button = "button";

	function slideShow(){
		
	};


</script>

<main>
	<h1> 2020-2021 Work </h1>
		<button on:click={slideShow} class:button> Slideshow 1</button>
	<section class="show-grid-1">
		<div class="picture-grid-1"></div>
		<div class="picture-grid-2"></div>
		<div class="picture-grid-3"></div>
		<div class="picture-grid-4"></div>
		<div class="picture-grid-5"></div>
	</section>
    	
	
	<h1> 2019-2020 Work </h1>
		<button class:button> Slideshow 2</button>
	<section class="show-grid-2"></section>
	
	<h1> 2018-2019 Work </h1>
		<button class:button> Slideshow 3</button>
	<section class="show-grid-3"></section>

</main>

<style>
.picture-grid-1, .picture-grid-2,.picture-grid-3,.picture-grid-4,.picture-grid-5{
	width: 200px;
	height:35px;
	background-color: red;
	
}
	.button{
		border-radius: 10%;
		border: 1px solid black;
		background-color: blanchedalmond;
	}
	
	main {
		
	}

	h1 {
		
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