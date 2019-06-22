class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    // console.log('Hello,')
  }
}

class Chinese extends Human {
  constructor(name, age, ID) {
    super(name, age);
    this.ID = ID;
  }
}
let c1 = new Chinese("张三", 28, "412819199901124000");
// console.log(c1);
c1.sayHi();
