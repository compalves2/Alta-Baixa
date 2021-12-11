function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

var imageArray = ["1.png", "2.png"];

var image = document.getElementsByClassName("image_index");

for(var i=0; i<image.length;i++) {
    image[i].src = "data/img/index/" + imageArray[getRandomInt(imageArray.length)];

    var vh = window.innerHeight, vw = window.innerWidth, img_width = image[i].width, img_height = image[i].height;
    var newTop = img_height/2 + getRandomInt(vh - img_height);
    var newLeft = img_width/2 + getRandomInt(vw - img_width);

    image[i].style.top = newTop + "px";
    image[i].style.left = newLeft + "px";
}
