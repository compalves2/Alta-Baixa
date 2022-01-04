var imagem=document.getElementsByClassName("emotion_animation");
var imagem_2=document.getElementsByClassName("emotion_animation_2");

for(var i=0; i<imagem.length; i++){
    imagem[i].active=Math.floor(getRandomNumber(1,4));
    setInterval(animation,200, imagem[i]);
}


for(var i=0; i<imagem_2.length; i++) {
    imagem_2[i].active = Math.floor(getRandomNumber(1, 4));
    setInterval(animation_2, 200, imagem_2[i]);
}

function animation(emotion){
    if (emotion.active < 4)
        emotion.active++;
    else
        emotion.active = 1;
    emotion.src = "data/img/fotos_artigo/" + emotion.dataset.src + "." + emotion.active + ".png";
}

function animation_2(emotion){
    if (emotion.active < 4)
        emotion.active++;
    else
        emotion.active = 1;
    emotion.src = "data/img/fotos_artigo/" + emotion.dataset.src + "." + emotion.active + ".svg";
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}