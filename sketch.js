var canvas, backgroundImage;
var goldImg,gold,silver,silverImg,bronze,bronzeImg
var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var f1,f1Image;
var form, player, game;
var passedFinished;
var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var carsAtEnd;
function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  f1Image=loadImage("images/f1.png");
  goldImg=loadImage("image/gold.png");
  silverImg=loadImage("image/silver.png");
  bronzeImg=loadImage("image/bronze.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();

  obstacles=createGroup()
  for(var i=0; i<5;i++){
    x=random(200,950)
    y=random(-height*4,height-300)
    obstacle=createSprite(x,y)
    obstacle.addImage(f1Image)
   obstacles.add(obstacle)
  }
}



function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4&& carsAtEnd==0 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {

     game.play();
   }
   if(carsAtEnd==4){
     game.update(2)
   }
   if (gameState === 2) {
     console.log("End");
     
   }}
 
  
