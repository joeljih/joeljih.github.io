<script>
	const grid1 = document.getElementById('show-grid-1');
const grid2 = document.getElementById('show-grid-2');

const buttonPS2021 = document.getElementById('button-1');
const buttonAI2021 = document.getElementById('button-2');
let version = 0;

function galleryMaker(start, stop){
    for(i = start; i <= stop; i++){
    const imageA = document.createElement('img');
    imageA.classList.add("image-sizing");
    imageA.src = `JPEG/${i}.jpg`;
    grid1.appendChild(imageA);
    version++;
};
};
function galleryEraser(){
    while(grid1.firstChild){
            grid1.removeChild(grid1.firstChild);};
            };
    /*const currentGallery = document.getElementsByClassName('image-sizing');
            for(i=0, galleryLength = currentGallery.length; i<galleryLength; i++){
                currentGallery[i].classList.add('animation');
                console.log(version);
            };
     setTimeout(eraser, 900);
     

    };
function eraser(){
while(grid1.firstChild){
            grid1.removeChild(grid1.firstChild);
            console.log("removing");
        };
};*/


function galleryOne(){
        if(version == 0){
            galleryEraser();
            galleryMaker(1, 10);
            /*setTimeout(()=>galleryMaker(1, 10),900);*/
    }
        else if(version == 10){
            galleryEraser();
            galleryMaker(10, 20);
           /* setTimeout(()=>galleryMaker(10, 20),900);*/
            
            version = 0;
    }
        else if(version == 20){
            galleryEraser();
            galleryMaker(20, 30);
    }
};

let v2 = 0;
function illustratorMaker(start, stop){
    for(i = start; i <= stop; i++){
    const imageA = document.createElement('img');
    imageA.classList.add("image-sizing-AI");
    imageA.src = `AI/${i}.png`;
    grid2.appendChild(imageA);
    v2++;
};
};
function illustratorEraser(){
    while(grid2.firstChild){
            grid2.removeChild(grid2.firstChild);};
            };

function galleryTwo(){
        if(v2 == 0){
            illustratorEraser();
            illustratorMaker(1, 10);
            /*setTimeout(()=>galleryMaker(1, 10),900);*/
    }
        else if(v2 == 10){
            illustratorEraser();
            illustratorMaker(10, 19);
           /* setTimeout(()=>galleryMaker(10, 20),900);*/
            v2 = 0;
    };
       
};


buttonPS2021.addEventListener("click", galleryOne);

buttonAI2021.addEventListener("click", galleryTwo);
	//export let name;
	/*
	let button = "button";


	function slideShow(){
	const showGrid1 = document.getElementById('showGrid1');
	const randomArray = [1,2,3,5,6];
	let srcTemplate = (i)=> `../Pictures/${i}.jpg`;
		for(i=0;i<5;i++){
	let temp = document.createElement("div");
	
	
	console.log(srcTemplate);

	temp.style.backgroundImage = `url(${srcTemplate})`;
	};
	
};
*/
/* Hot trash below: 
let temp = document.createElement("div");
	
	temp.classList.add('picture-grid-1');
	let srcTemplate = (i)=> `../Pictures/${i}.jpg`;
	console.log(srcTemplate);
	let i = 1;
	temp.style.backgroundImage = `url(${srcTemplate})`;
	showGrid1.appendChild(temp);
	*/
		/*const showGrid1 = document.getElementById('showGrid1');
		let i = 2;
let temp = document.createElement("div");
temp.classList.add('picture-grid-1');
temp.style.backgroundImage = `../Pictures/${i}.jpg`;

/*temp.setAttribute("src",`../Pictures/${i}.jpg`);
showGrid1.appendChild(temp);*/



</script>

<main><!--
	<h1> 2020-2021 Work </h1>
	
		<button on:click={slideShow} class:button> Slideshow 1</button>
	<section id="showGrid1" class="show-grid-1">
		<div class="picture-grid-1"></div>
		<div class="picture-grid-2"></div>
		<div class="picture-grid-3"></div>
		<div class="picture-grid-4"></div>
		<div class="picture-grid-5"></div>
		<div class="picture-grid-6"></div>
		
	</section>
    	
	
	<h1> 2019-2020 Work </h1>
		<button class:button> Slideshow 2</button>
	<section class="show-grid-2"></section>
	
	<h1> 2018-2019 Work </h1>
		<button class:button> Slideshow 3</button>
	<section class="show-grid-3"></section> */-->
	<div class="square"> </div>
      <ol id="nav">
          <li> <a class="nav" href=""> Home </a></li>
          <li> <a class="nav" href=""> 2021 </a> </li>
          <li> <a class="nav" href=""> 2020 </a> </li>
          <li> <a class="nav" href=""> 2019 </a> </li>
          <li> <a class="nav" href=""> 2018 </a> </li>
          </ol>
        <img id="logo" src="Construction.png"/>
      <h1> 2020-2021 Photoshop </h1>
      <button id="button-1"> Photoshop</button>
    <section id="show-grid-1">
    </section>
    <h1> 2020-2021 Adobe illustrator </h1>
    <button id="button-2"> Adobe Illustrator</button>
    <section id="show-grid-2">
        </section>

</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

*{
    font-family: 'Montserrat', sans-serif;
    text-align: center;
}

.square{
    background-color: aquamarine;
    width: 1941px;
    height: 200px;
    position: relative;
    top: -100px;
    left: -100px;
}

#nav {
    position: absolute; 
    top: 30px;
    left: 200px;
    width: 1500px;
    text-align: left;
    overflow: hidden
}
.nav{
    text-decoration: none;
    font-size: 150%;
}
.nav:hover{
    color: rgba(255, 255, 255, 0.596);
    text-decoration: underline;
}
li{
    display: inline;
    margin-right: 5%;
    
}
#logo{
    width: 200px;
    height: 200px;
    object-fit: contain;
    position: absolute;
    top: 1%;
    left: -1%;

}
#show-grid-1 {
	display: grid;
	width: min(95%, 400px);
	gap: 1rem;
    
}

.image-sizing {
    width: 300px;
    height: 300px;
    object-fit: contain;
    transition: 0.5s all ease-out;
}

.image-sizing:hover{
    width: 500px;
    height: 500px;
    transition: 1s all ease-out;
    position: relative;
    
}
.animation {
   animation-name: hide;
   animation-duration: 700ms;
}

@keyframes hide {
    from{opacity: 1;}
    20%{opacity: 0.8;}
    60%{opacity: 0.6;}
    80%{opacity: 0.4;}
    to{opacity: 0;} 
}

@media (min-width: 600px){
    #show-grid-1{
        grid-template-columns: repeat(5, 1fr);
    }
}


#show-grid-2 {
	display: grid;
	
	width: min(95%, 400px);
    height: min(95%, 400px);
	gap: .5rem;
    
}

.image-sizing-AI {
    width: 350px;
    height: 350px;
    object-fit: contain;
    transition: 0.5s all ease-out;
}
.image-sizing-AI:hover{
    width: 800px;
    height: 800px;
    transition: 1s all ease-out;
    position: relative;
    
}

@media (min-width: 600px){
    #show-grid-2{
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>