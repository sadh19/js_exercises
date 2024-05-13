class Group {
  constructor() {
    this.group = [];
  }

  add(element) {
    if (this.group.indexOf(element) === -1) {
      this.group.push(element);
    }
  }

  delete(element) {
    if (this.group.indexOf(element) !== -1) {
      let leftSide = [...this.group].splice(0, this.group.indexOf(element), 1);
      let rightSide = [...this.group].splice(this.group.indexOf(element) + 1);
      this.group = [...leftSide, ...rightSide];
    }
  }

  has(element) {
    return this.group.indexOf(element) !== -1;
  }
}

let group = new Group();
group.add("2");
group.add(2);
group.delete(2);
group.delete("2");
group.add("1");
group.add(1);

console.log(group);
console.log(group.has("1"));
console.log(group.has(3));

