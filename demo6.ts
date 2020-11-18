//类

//公共，私有与受保护的修饰符
//默认为 public（公共）
class Animal {
 public name: string;

}

//私有（private）,只能在内部访问
class Animal {
 private name: string;
 constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // 错误: 'name' 是私有的.