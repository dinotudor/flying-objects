'use strict';

function Player (canvas) {
  this.lives = 3;
  this.canvas = canvas;
  this.size = 50;
  this.x = this.canvas.width/2;
  this.y = this.canvas.height-50;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 8;
  this.direction = 0;
}

Player.prototype.draw = function(){
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2, this.size, this.size);
  this.ctx.drawImage()
} 

Player.prototype.update = function () {  
  this.x = this.x + this.direction * this.speed;
}

Player.prototype.move = function (newDirection) {
  this.direction = newDirection;
}

Player.prototype.setLives = function(){
  this.lives --;
}

Player.prototype.checkCollisionWithEnemy = function(enemy){
  const collisionRigth = this.x + this.size/2 > enemy.x - enemy.size/2;
  const collisionLeft = this.x - this.size/2 < enemy.x + enemy.size/2;
  const collisionTop = this.y - this.size/2 < enemy.y + enemy.size/2;
  const collisionBottom = this.y + this.size/2 > enemy.y - enemy.size/2;

  return collisionRigth && collisionLeft && collisionTop && collisionBottom;
}

