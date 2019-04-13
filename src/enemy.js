'use strict';

function Enemy (canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.size = 35;
  this.direction = 1;
  this.speed = 2;
  this.x = x;
  this.y = 0 + this.size/2;
}

Enemy.prototype.draw = function(){
  this.ctx.fillStyle = 'red';
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
}

Enemy.prototype.update = function(){
  this.y = this.y + this.direction * this.speed
}