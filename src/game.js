'use strict';

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
/*     for (var i =0; i<10; i++) {
      this.enemies.push(new Enemy(this.canvas, i*50));
    } */
    
    const loop = () => {

      if(Math.random() > 0.97){
        const randomNumber = (Math.random() * this.canvas.width - 15) + 15;
        this.enemies.push(new Enemy(this.canvas, randomNumber))
      }

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
  this.enemies.forEach(function(enemy){
    enemy.update();
  });

}

Game.prototype.drawCanvas = function () {
  this.player.draw();
  this.enemies.forEach(function(enemy){
    enemy.draw();
  });
}





