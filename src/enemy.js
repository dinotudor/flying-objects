'use strict';

function Enemy (canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.size = 65;
  this.direction = 1;
  this.speed = 5;
  this.x = x;
  this.y = this.canvas.height + this.size/2;
}

Enemy.prototype.draw = function(){
  this.ctx.fillStyle = 'red';
  this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
}

Enemy.prototype.update = function(){
  this.y = this.y + this.direction * this.speed
}