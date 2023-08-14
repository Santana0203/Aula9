var fundo2Img, fundo2;
var BuracoImg, Buraco;
var carroImg, carro;
var BarrilImg, Barril;
var explosaoImg, explosao; 

var BarrilGroup;
var BuracoGroup;

var score = 0;
var life = 3;

var gameState = "play";

//carregar imagens
function preload() {
fundo2Img=loadImage("img/fundo2.png")
//BarrilImg-loadImage("Barril")
carroImg=loadAnimation("img/carro.png")
//BuracoImg=loadImage("img/Buraco.png")
explosaoImg=loadAnimation("img/explosao.png")

}


function setup() {
  createCanvas(800,800);

  //criar sprites
  fundo2 = createSprite(400,450)
  fundo2.addImage(fundo2Img)
  fundo2.scale= 1.7

  carro = createSprite(400,400)
  carro.addAnimation("carro", carroImg)
  carro.addAnimation("explosao", explosaoImg)
  carro.scale=0.5

}

function draw() {
  background(0);

  drawSprites();
  
  //criar estado de jogo "play"
  if (gameState=="play") {
    fundo2.velocityY=4;


   if (fundo2.y>400) {
    fundo2.y=200
   }
  }


  //criar estado de jogo "end"
 
  
}

function spawnAliens() {
  
}

function spawnCoins() {
  
 
}

function removeCoins() {
  foguete.overlap(coinGroup, function(collector, collected){
    score += 1;
    collected.remove();
  });
}

function removeLife() {
  
 }