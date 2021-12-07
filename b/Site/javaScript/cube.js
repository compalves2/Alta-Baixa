var cube_action = document.getElementById("cube_action");
var cube = document.getElementsByClassName("cube");

cube_action.addEventListener("click", function(){
    for(var i = 0; i< cube.length; i++){
        if(cube[i].classList.contains("rotateup")){
            cube[i].classList.remove("rotateup");
            cube[i].classList.add("rotatedown");
        }
        else if(cube[i].classList.contains("rotatedown")){
            cube[i].classList.remove("rotatedown");
            cube[i].classList.add("rotateup");
        }
        else{
            cube[i].classList.add("rotateup");
        }
    }
})
