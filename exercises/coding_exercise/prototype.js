function Add(x, y) {
  this.x = x;
  this.y = y;
}

const add = new Add(5, 4);
console.log(Add.prototype);
