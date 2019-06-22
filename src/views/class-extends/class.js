class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //静态属性和方法
  static info = "this is a Animal class";
  static shout() {
    // console.log("叽叽喳喳");
  }
  //实例方法
  eat() {
    // console.log("eat a lot");
  }
}

let a1 = new Animal("大黄", 18);
// console.log(a1)
// console.log(Animal.info);
// console.log(Animal.prototype.constructor);
Object.getOwnPropertyNames(Animal.prototype);
a1.eat();
Animal.shout();
