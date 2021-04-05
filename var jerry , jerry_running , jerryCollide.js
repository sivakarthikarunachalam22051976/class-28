var jerry , jerry_running , jerryCollide;
var garden , gardenImg;
var tom , tom_running , tomCollide;

function preload() {
    //load the images here
    jerry_running = 
    loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png")  

    tom_running =
    loadAnimation("tomTwo.png","tomThree.png")


  gardenImg = loadImage("garden.png")
  jerry = loadImage("tomOne.png","tomFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry = createSprite(80,230,10,10);
    jerry.addAnimation("jerry", jerry_running);
    jerry.scale = 0.12;
    jerry.addAnimation("jerryCollide", jerryCollide);

    tom = createSprite(80,230,10,10);
    tom.addAnimation("tom", tom_running);
    jerry.scale = 0.12;
    tom.addAnimation("tomCollide", tomCollide);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    drawSprites();
}


