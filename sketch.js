
var music;
var s1, s2, s3, s4;
var box;
var sound1;
var edges;
function preload() {
  sound1 = loadSound("music.mp3");
}


function setup() {
  
  createCanvas(800, 600)
 

  //create 4 different surfaces
  s1 = createSprite(100, 550, 170, 20);
  s1.shapeColor = 'blue';
  s2 = createSprite(280, 550, 170, 20);
  s2.shapeColor = 'red';
  s3 = createSprite(460, 550, 170, 20);
  s3.shapeColor = 'orange';
  s4 = createSprite(640, 550, 170, 20);
  s4.shapeColor = 'green';
  s1.debug = true

  //  sound1.play();//how to loop the sound
 



  //create box sprite and give velocity
  box = createSprite(400, 75)
  box.velocityX = 5
  box.velocityY = -4
  sound1.loop();

}

function draw() {
  background(rgb(169, 169, 169));
  //create edgeSprite

  edges = createEdgeSprites();
  box.bounceOff(edges)//needed to write bounceoff
  if (box.isTouching(s3) && box.bounceOff(s3)) {//repeat this code for s1 s2 and s4
    // whenevr its touching s1 make velocity of box as 0 and stop music
    sound1.play();
    box.shapeColor = "orange"

  }


  drawSprites();

}
