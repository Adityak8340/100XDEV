
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog = new Animal('dog', 4)
let cat = new Animal('cat', 4)
let spider = new Animal('spider', 8)
let snake = new Animal('snake', 0)

console.log(dog.describe())
console.log(cat.describe())
console.log(spider.describe())
console.log(snake.describe())
