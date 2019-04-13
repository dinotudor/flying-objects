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
    this.player = new Player(this.canvas);

    const loop = () => {

      this.clearCanvas();
      this.updateCanvas();
      this.drawCanvas();

      if (this.isGameOver === false) {
        window.requestAnimationFrame(loop)
      }
    } 

    window.requestAnimationFrame(loop)
}

Game.prototype.clearCanvas = function (){
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function () {
  this.player.update();
}

Game.prototype.drawCanvas = function () {
  this.player.draw();
}





