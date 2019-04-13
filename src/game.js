function Game (canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.player = null;
  this.enemies = [];
  this.bullet = null;
  this.isGameOver = false;
}

Game.prototype.startLoop = function () {
    console.log('HELLO!')
  }

Game.prototype.clearCanvas = function (){
  console.log('CLEAR CANVAS');
}

Game.prototype.update = function () {
  console.log('UPDATE');
}

Game.prototype.draw = function () {
  console.log('DRAW');
}
