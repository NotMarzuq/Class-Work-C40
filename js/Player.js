class Player {
  constructor() {
    this.positionX = 0;
    this.positionY = 0;
    this.name = null;
    this.index = null;
  }

  getPlayerCount() {
    var PlayerCountRef = database.ref("playerCount");
    PlayerCountRef.on("value", (data) => {
      myPlayerCount = data.val();
    });
  }

  updatePlayerCount(CountNumber) {
    database.ref("/").update({
      playerCount: CountNumber,
    });
  }

  addplayers() {
    var playerPath = "players/player" + this.index;
    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2+100;
    }

    database.ref(playerPath).set({
      index: this.index,
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }

  getDistance() {
    //positionX, positionY from database
    var playerPath = "players/player" + this.index;
    var playerDistance = database.ref(playerPath);

    playerDistance.on("value", (data) => {
      var distance = data.val()
      this.positionX = distance.positionX, this.positionY = distance.positionY
    });
  }
  updatePlayerInfo() {
    var playerPath = "players/player" + this.index;
    database.ref(playerPath).update({
      index: this.index,
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }

  static getallPlayerInfo() {
    var playerPath = database.ref("players");
    playerPath.on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
