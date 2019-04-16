'use strict';

function Game (canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.player = null;
  this.enemies = [];
  this.bullets = [];
  this.bullet = null;
  this.isGameOver = false;
  this.score = 0;
  this.updateMarkers = null;
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

Game.prototype.shoot = function (){
  this.bullets.push(new Bullet (this.canvas, this.player.x));
}

Game.prototype.clearCanvas = function (){
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function () {
  this.player.update();
  this.enemies.forEach(function(enemy){
    enemy.update();
  });
  this.bullets.forEach(function(bullet) {
    bullet.update();
  });
}

Game.prototype.drawCanvas = function () {
  this.player.draw();
  this.enemies.forEach(function(enemy){
    enemy.draw();
  });
  this.bullets.forEach(function(bullet){
    bullet.draw();
  });
}

Game.prototype.clearEnemy = function (enemy){
    return (enemy.y + enemy.height) > this.canvas.height;
}

Game.prototype.clearShots = function (bullet){
    return (bullet.y - bullet.size) < 0; 
}

Game.prototype.checkCollisions = function(){
  this.enemies.forEach((enemy, enemyIndex) => {
    const isColliding = this.player.checkCollisionWithEnemy(enemy);
    const isOutOfScreen = this.clearEnemy(enemy);
    //const shotOutTheScreen = this.clearShots()
    
    if (isColliding) {
      this.enemies.splice(enemyIndex,1);
      this.player.setLives();
      this.updateMarkers(this.player.lives, this.score)
      if (this.player.lives === 0){
        this.isGameOver = true;
        this.buildGameOverScreen();
      }
      console.log(this.player.lives);
    }

    if (isOutOfScreen) {
      let removed = this.enemies.splice(enemyIndex,1);      
      //console.log('removed', removed);
    }
    this.bullets.forEach((bullet, bulletIndex) => {
      const isHitEnemy = enemy.checkHitByBullet(bullet);
      if (isHitEnemy) {
        this.enemies.splice(enemyIndex,1);
        this.bullets.splice(bulletIndex,1);
        this.score += 100;
        this.updateMarkers(this.player.lives, this.score)
        console.log(this.score);
      }
    });

  })

  this.bullets.forEach( (bullet, index) => {
    const isOutOfScreen = this.clearShots(bullet);
    if (isOutOfScreen) {
      this.bullets.splice(index, 1);
      console.log('remove bullet', isOutOfScreen);
    }
  });
}

Game.prototype.setGameOverCallBack = function(buildGameOverScreen) {
  this.buildGameOverScreen = buildGameOverScreen;
}

Game.prototype.setUpdateMarkersCallback = function(callback) {
  this.updateMarkers = callback;
}





