'use strict';

function Player (canvas) {
  this.lives = 3;
  this.canvas = canvas;
  this.size = 50;
  this.x = this.canvas.width/2;
  this.y = this.canvas.height-50;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 3;
  this.direction = 0;
}

Player.prototype.draw = function(){
  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2, this.size, this.size);
} 

Player.prototype.update = function () {  
  this.x = this.x + this.direction * this.speed;
}

Player.prototype.move = function (newDirection) {
  this.direction = newDirection;
}
