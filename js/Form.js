class Form {
  constructor() {
    this.title = createImg("./assets/title.png");
    this.input = createInput("").attribute("placeholder", "Enter the Name");
    this.button = createButton("play");
    this.greeting = createElement("h1");
  }

  setPosition() {
    this.title.position(70, 100);
    this.input.position(width / 2 - 130, height / 2);
    this.button.position(width / 2 - 130, height / 2 + 50);
    this.greeting.position(width / 2 - 220, height / 2);
  }

  setStyle() {
    this.title.class("gameTitle");
    this.input.class("customInput");
    this.button.class("customButton");
    this.greeting.class("greeting");
  }

  handleMousePressed() {
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();

      var message = `Hello ${this.input.value()} 
    </br> Wait for other players to join the game`;
      this.greeting.html(message);

      // increasing the index
      myPlayerCount += 1;
      myplayer.name = this.input.value();
      myplayer.index = myPlayerCount;
      myplayer.updatePlayerCount(myPlayerCount);
      myplayer.addplayers();
    });
  }
  display() {
    this.setPosition();
    this.setStyle();
    this.handleMousePressed();
  }
  hideform() {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
}
