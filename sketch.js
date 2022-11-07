var canvas;
var backgroundImage;
var bgImg;
var database;

var myform, myplayer, mygame;
var myPlayerCount, myGamestate;
var car1, car2, car1Image, car2Image, trackImage;
var cars;

var allPlayers;
var powercoins,fules,powercoinsImage,fulesImage
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image = loadImage("./assets/car1.png");
  car2Image = loadImage("./assets/car2.png");
  trackImage = loadImage("./assets/track.jpg");

  powercoinsImage=loadImage("./assets/goldCoin.png")
  fulesImage=loadImage("./assets/fuel.png")
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // initializing the database
  database = firebase.database();

  mygame = new Game();
  mygame.start();
  mygame.getGameState();
}

function draw() {
  background(backgroundImage);

  // when 2 player joined the game
  if (myPlayerCount === 2) {
    mygame.updateGameState(1);
  }
  if (myGamestate === 1) {
    mygame.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
