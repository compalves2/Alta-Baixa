var imagem=document.getElementsByClassName("emotion_animation");

for(var i=0; i<imagem.length; i++){
    imagem[i].active=Math.floor(getRandomNumber(1,4));
    setInterval(animation,200, imagem[i]);
}


function animation(emotion){
    if (emotion.active < 4)
        emotion.active++;
    else
        emotion.active = 1;
    emotion.src = "data/img/fotos_artigo/" + emotion.dataset.src + "." + emotion.active + ".png";
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}