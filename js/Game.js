class Game {
  constructor() {}

  getGameState() {
    var gameStateRef = database.ref("gamestate");
    gameStateRef.on("value", (data) => {
      myGamestate = data.val();
    });
  }

  updateGameState(stateNumber) {
    database.ref("/").update({
      gamestate: stateNumber,
    });
  }

  handleElements() {
    myform.hideform();
    myform.title.position(40, 50);
    myform.title.class("gameTitleAfterChange");
  }

  start() {
    myform = new Form();
    myform.display();

    myplayer = new Player();
    myplayer.getPlayerCount();

    car1 = createSprite(width / 2 - 100, height - 100);
    car1.addImage("car1", car1Image);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2Image);
    car2.scale = 0.07;
    cars = [car1, car2];

    // fuels group
    fules = new Group();
    this.addSprites(fules, 20, fulesImage, 0.02);
    powercoins = new Group()
    this.addSprites(powercoins, 13, powercoinsImage, 0.09)
  }

  play() {
    this.handleElements();
    Player.getallPlayerInfo();
    if (allPlayers !== undefined) {
      // image(nameoftheimage,x,y,w,h)
      image(trackImage, 0, -height * 5, width, height * 6);

      var index = 0;
      for (var i in allPlayers) {
        index = index + 1;
        var x = allPlayers[i].positionX;
        var y = height - allPlayers[i].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === myplayer.index) {
          stroke("black");
          strokeWeight(3);
          fill("blue");
          ellipse(x, y, 60, 60);
        }
      }
      drawSprites();
    }
  }

  end() {}

  addSprites(spriteGroup, numberofSprites, spriteImage, spriteScale) {
    for (var i = 0; i < numberofSprites; i += 1) {
      var x, y;
      x = random(width / 2 + 200, width / 2 - 200);
      y = random(height * 4, height - 400);

      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);

      sprite.scale = spriteScale;
      spriteGroup.add(sprite);
    }
  }
}
