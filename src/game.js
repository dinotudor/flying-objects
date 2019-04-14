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

      if(Math.random() > 0.98){
        const randomNumber = (Math.random() * this.canvas.width - 15) + 15;
        this.enemies.push(new Enemy(this.canvas, randomNumber))
      }

      this.clearCanvas();
      this.updateCanvas();
      this.drawCanvas();
      this.checkCollisions();

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

Game.prototype.checkCollisions = function(){
  this.enemies.forEach((enemy, index) => {
    const isColliding = this.player.checkCollisionWithEnemy(enemy);
    if (isColliding) {
      
      this.enemies.splice(index,1);
      this.player.setLives();
      if (this.player.lives === 0){
        this.isGameOver = true;
        this.buildGameOverScreen();
      }
      console.log(this.player.lives);
    }
  })
}

Game.prototype.setGameOverCallBack = function(buildGameOverScreen) {
  this.buildGameOverScreen = buildGameOverScreen;
}





