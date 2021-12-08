var elementEffect = document.getElementsByClassName("efeito");
var neffect = 1/20, temp;

function getRandomInt(max){
    return Math.floor(Math.random()*max)+1;
}

for(var x=0; x<elementEffect.length; x++){
    var pEffect = elementEffect[x].getElementsByTagName("p");
    //console.log(pEffect);
    for(var y=0; y<pEffect.length; y++){
        var texto = pEffect[y].innerHTML;
        var palavra = texto.split(" ");
        var npalavra = palavra.length;

        var palavraEffect = Array();

        for(var i=0; i<npalavra*neffect; i++){
            do {
                temp = getRandomInt(npalavra);
            } while (palavraEffect.includes(temp));

            palavraEffect.push(temp);
        }
        palavraEffect.push(palavra.length);

        palavraEffect.sort(function (a, b) { return a-b});

        var point = 0, tempText = "", newText = "";

        for(var i=0; i<palavraEffect.length; i++) {
            for(tempText=""; point<palavraEffect[i]; point++) {
                tempText += palavra[point]+" ";
            }

            newText += tempText;
            if(point<=palavra.length-1) {
                newText += "<u>" + palavra[point] + "</u> ";
                point++;
            }
        }

        pEffect[y].innerHTML = newText;
        //console.log(pEffect[y]);
    }
}