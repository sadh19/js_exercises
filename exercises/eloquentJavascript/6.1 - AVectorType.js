class Vector {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
}

Vector.prototype.plus = function (vector) {
  return { x: this.x + vector.x, y: this.y + vector.y };
};

Vector.prototype.minus = function (vector) {
  return { x: this.x - vector.x, y: this.y - vector.y };
};

Vector.prototype.length = function () {
  return Math.sqrt(((this.x - 0) ^ 2) + ((this.y - 0) ^ 2));
};


let vector = new Vector(6, 6);
console.log(vector.plus(new Vector(2, 4)));
console.log(vector.minus(new Vector(2, 4)));
console.log(vector.length());
