var bgImg
var form,game,player
var database
var allPlayers
var score = 0
var playerCount = 0
var gameState = 0
var P1,P2,P3
var P1Img,P2Img,P3Img

function preload(){
bgImg = loadImage('images/back.jpeg')
}

function setup() {

  database = firebase.database()
  createCanvas(displayWidth-100,displayHeight-100);
  //createSprite(400, 200, 50, 50);

  form = new Form()
  player = new Player()
   
 
  

}


function draw() {
  background(bgImg);  
  //drawSprites();
  form.display();
}