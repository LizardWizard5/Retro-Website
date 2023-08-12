//This script allows alternatig mario in the top left from jumping to standing when clicked
var clicked= false;
var mario = document.getElementById("mario");
mario.addEventListener("click", function(){
    if(!clicked){
        mario.src="./img/mario_Jumping.png";
        //new Audio('./mp3/Mario-coin-sound.mp3').play()// Audio too loud
        clicked = true;
    }
    else{
        mario.src="./img/mario_Standing.png";
        clicked = false;
    }
});