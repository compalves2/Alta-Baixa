let images_1, images_2, images_3, images_4, images_5, images_6;
let imageIndex=0;

function preload(){
    images_1=[
        loadImage('data/1/1.png'),
        loadImage('data/1/2.png'),
        loadImage('data/1/3.png'),
        loadImage('data/1/4.png'),
        loadImage('data/1/3.png'),
        loadImage('data/1/2.png'),
        loadImage('data/1/1.png'),
    ]

    images_2=[
        loadImage('data/2/1.png'),
        loadImage('data/2/2.png'),
        loadImage('data/2/3.png'),
        loadImage('data/2/4.png'),
        loadImage('data/2/3.png'),
        loadImage('data/2/2.png'),
        loadImage('data/2/1.png'),
    ]

    images_3=[
        loadImage('data/3/1.png'),
        loadImage('data/3/2.png'),
        loadImage('data/3/3.png'),
        loadImage('data/3/4.png'),
        loadImage('data/3/3.png'),
        loadImage('data/3/2.png'),
        loadImage('data/3/1.png'),
    ]

    images_4=[
        loadImage('data/4/1.png'),
        loadImage('data/4/2.png'),
        loadImage('data/4/3.png'),
        loadImage('data/4/4.png'),
        loadImage('data/4/3.png'),
        loadImage('data/4/2.png'),
        loadImage('data/4/1.png'),
    ]

    images_5=[
        loadImage('data/5/1.png'),
        loadImage('data/5/2.png'),
        loadImage('data/5/3.png'),
        loadImage('data/5/4.png'),
        loadImage('data/5/3.png'),
        loadImage('data/5/2.png'),
        loadImage('data/5/1.png'),
    ]

    images_6=[
        loadImage('data/6/1.png'),
        loadImage('data/6/2.png'),
        loadImage('data/6/3.png'),
        loadImage('data/6/4.png'),
        loadImage('data/6/3.png'),
        loadImage('data/6/2.png'),
        loadImage('data/6/1.png'),
    ]


}

let cnv;
function setup(){
    cnv=createCanvas(500,1000);
    frameRate(8);
}

function draw(){
    background(191,186,191);
    moveFrame();


    image(images_1[imageIndex],250,0);
    image(images_2[imageIndex],250,250);
    image(images_3[imageIndex],0,0);
    image(images_4[imageIndex],0,250);
    image(images_5[imageIndex],0,500);
    image(images_6[imageIndex],250,500);


    text("EMOTION EXTRATION");
}

function moveFrame(){
    imageIndex++;

    if(imageIndex>images_1.length-1){
        imageIndex=0;
    }
    if(imageIndex>images_2.length-1){
        imageIndex=0;
    }
    if(imageIndex>images_3.length-1){
        imageIndex=0;
    }
    if(imageIndex>images_4.length-1){
        imageIndex=0;
    }
    if(imageIndex>images_5.length-1){
        imageIndex=0;
    }
    if(imageIndex>images_6.length-1){
        imageIndex=0;
    }
}