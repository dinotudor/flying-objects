'use strict';

function Bullet(canvas, x) {
  this.speed = 6;
  this.direction = -1;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.size = 5;
  this.x = x;
  this.y = 0 - this.size/2;
}

Bullet.prototype.draw = function(){
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
}

Bullet.prototype.update = function(){
  this.y = this.y - this.direction * this.speed
}