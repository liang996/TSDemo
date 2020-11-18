//接口和类
interface Student {
 readonly x: number;
 readonly y: number;
}

let h: Student = { x: 10, y: 20 };
h.x = 5;// Cannot assign to 'x' because it is a read-only property.

interface Student {
 name: string;
 age?: 18;
 [propName: string]: any;


}

let jack: Student = {
 name: 'Tom',
 sex: "男"
};
console.log(jack)//{ name: 'Tom', sex: '男' }

let list: number[] = [1, 1, 2, 3, 5];
list.push(66);
console.log(list)//{ name: 'Tom', sex: '男' }


interface Student {
 name: string;
 age?: 18;
 [propName: string]: any;


}

let jack: Student = {
 name: 'Tom',
 sex: "男"
};
console.log(jack)



function getLength(something: string | number): number {
 return something.length;
}

console.log(getLength)


enum Days { Sun = 1, Mon, Tue, Wed, Thu, Fri, Sat };

console.log(Days.Thu)//5

enum Color {
 color1 = "blue",
 color2 = "red",
 color3 = "pink",
}

console.log(Color.color3)


class Humanity {
 public content: string;
 public say() {
  return this.content;
 }
}
//-------以下属于类的外部--------

const humanity = new Humanity()
humanity.content = '我是内容'
humanity.say()
console.log(humanity.content)
console.log(humanity.say())


class Humanity {
 private content: string;
 public say() {
  return this.content;
 }
}
//-------以下属于类的外部--------

const humanity = new Humanity()
humanity.content = '我是内容'

console.log(humanity.say())

class Humanity {
 protected content: string;
 public say() {
  return this.content; ////此处不报错
 }
}
//-------以下属于类的外部--------

const humanity = new Humanity()
humanity.content = '我是内容'
console.log(humanity.content)


class Humanity {
 protected content: string;
 public say() {
  return this.content;//此处不报错
 }
}
class Teacher extends Humanity {
 public sayBye() {
  this.content;
 }
}

const humanity = new Teacher()
humanity.content = '我是内容'//Property 'content' is protected and only accessible within class 'Humanity' and its subclasses.
console.log(humanity.sayBye())


class Humanity {
 content = "我是人类";
 sayHello() {
  return this.content;
 }
}
class Student extends Humanity {
 say() {
  return "我是学生，继承人类";
 }
 sayHello() {
  return "我是一个大类";
 }
}

const St = new Student();

console.log(St.sayHello());


class Humanity {
 content = "我是人类";
 sayHello() {
  return this.content;
 }
}
class Student extends Humanity {
 say() {
  return "我是学生，继承人类";
 }
 sayHello() {
  return super.sayHello() + "，我是一个大类";
 }
}

const St = new Student();

console.log(St.sayHello());


class Person {
 ;
 constructor(public name: string) {
 }
}

const person = new Person('tom')
console.log(person.name)

class Xiaojiejie {
 constructor(private _age: number) { }
 get age() {
  return this._age
 }
}

const dajiao = new Xiaojiejie(28)

console.log(dajiao.age())

class Humanity {
 static say() {
  return "我是人类";
 }
}
console.log(Humanity.say());//我是人类


class Person {
 constructor(readonly name: string) { }
}

const person = new Person('tom')
person.name = 'jack'
console.log(person.name)

abstract class Animal {
 constructor(public name: string) {
 }
 public abstract sayHi();
}

let a = new Animal('Jack')//无法创建抽象类的实例。:Cannot create an instance of an abstract class.

abstract class Animal {
 constructor(public name: string) {
 }
 public abstract sayHi();
}


class Cat extends Animal {
 public eat(): void {
  console.log(`${this.name} is eating.`);
 }
}

let cat = new Cat('Tom');//非抽象类“Cat”不实现从类“Animal”继承的抽象成员“sayHi”。


abstract class Humanity {
 constructor(public content: string) {
 }
 public abstract play();
}


class Student extends Humanity {
 public play() {
  console.log(`${this.content}`);
 }
}

let aa = new Student('赛车');

console.log(aa);//Student { content: '赛车' }
