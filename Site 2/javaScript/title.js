var title = document.getElementById("title").children;

var mapping = Array();

for(var i=0; i<title.length; i++){
    mapping.push(Array());

    var childrens = title[i].children;

    for(var j=0; j<childrens.length; j++) {
        mapping[i].push(true);
    }

    var random=getRandomInt(childrens.length);

    for(var j=0; j<random; j++) {
        var hideRandom;
        do {
            hideRandom = getRandomInt(mapping[i].length);
        } while(mapping[i][hideRandom] == false);

        childrens[hideRandom].classList.add("hide");
        mapping[i][hideRandom] = false;
    }
}