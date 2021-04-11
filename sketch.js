
var music;
var box;
var base1; 
var base2;
var base3;
var base4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
     createCanvas(800,600);

    //create 4 different surface
    base1=createSprite(100,580,140,20);
    base1.shapeColor="yellow";
    base2=createSprite(280,580,140,20);
    base2.shapeColor="green";
    base3=createSprite(460,580,140,20);
    base3.shapeColor="red" ;
    base3.debug= true
    base4=createSprite(640,580,140,20);
    base4.shapeColor="blue";

    base5=createSprite(10,590,10,2000);
    base5.visible=false

    base6=createSprite(790,10,10,2000);
    base6.visible=false

    base7=createSprite(790,590,1900,20);
    base7.visible=false

    base8=createSprite(400,10,1000,20);
    base8.visible=false
    //create box sprite and give velocity
     box=createSprite(random(70,750),300,30,30);
     //box.velocityX=4
     box.velocityY=5
     box.velocityX=4
}

function draw() {
   
    background(120,1,120);
   createEdgeSprites()
    drawSprites()

    box.bounceOff(base1)
    box.bounceOff(base2)
    box.bounceOff(base3)
    box.bounceOff(base4)
    box.bounceOff(base5)
    box.bounceOff(base6)
    box.bounceOff(base7)
    box.bounceOff(base8)
    if(box.bounceOff(base1)){
        box.shapeColor="yelllow"
    }
    if(box.bounceOff(base2)){
        box.shapeColor="green"
    }
    if(box.bounceOff(base3)){
        box.shapeColor="red"
    }
    if(box.bounceOff(base4)){
        box.shapeColor="blue"
    }

    //add condition to check if box touching surface and make it box
}

