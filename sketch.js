var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

  //loading music
    music = loadSound("music.mp3");

    //create 4 different surfaces
surface1 = createSprite(100,550,180,25);
surface1.shapeColor = "red" ;

surface2 = createSprite(300,550,180,25);
surface2.shapeColor = "orange";

surface3 = createSprite(500,550,180,25);
surface3.shapeColor = "yellow";

surface4 = createSprite(700,550,180,25);
surface4.shapeColor = "green";

    //create box sprite and give velocity
box = createSprite(random(20, 750), 10, 30, 30);
box.shapeColor = "black";
box.setVelocity(2,7);
}

function draw() {
    background("lightblue");
    //create edgeSprite
 edges = createEdgeSprites();

 //adding if condition to check if box touching surfaces and change box color accordingly
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor = "red";
        music.play() 
    }

    if(box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor = "orange";
        }

    if(box.isTouching(surface3)&& box.bounceOff(surface3)){
        box.shapeColor = "yellow";
        box.setVelocity(0,0);
        music.stop();
    }

    if(box.isTouching(surface4)&& box.bounceOff(surface4)){
        box.shapeColor = "green";
    }

    box.bounceOff(edges);

    //displaying objects/sprites
    box.display();
    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();

    drawSprites();
}
