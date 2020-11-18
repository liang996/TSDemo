//基础静态类型

const a: number = 1
const b: string = "哈哈"
const c: boolean = true

console.log("基础类型,,,", a, b, c)//1 哈哈 true

//数组写法（2种）
const list: number[] = [1, 2, 3]
const list2: Array<number> = [1, 2, 3]
console.log("数组,,,", list, list2)//[ 1, 2, 3 ] [ 1, 2, 3 ]

//元祖
const d: [string, number] = ["1", 1]
console.log("元祖,,,", d)//[ '1', 1 ]



//枚举(关键字：enum)
enum Color { Red, Green, Blue }
let g: Color = Color.Green;

console.log("枚举,,", g)//1,默认情况下，从0开始为元素编号，Green在第一位。

//全部都采用手动赋值
enum Color1 { Red = 1, Green = 3, Blue = 5 }
let h: Color1 = Color1.Green;
console.log("枚举,,", h)//3

//初始值从1开始编号
enum Color2 { Red = 1, Green, Blue }
let i: Color2 = Color2.Green;
console.log("枚举,,", i)//2


//通过枚举的值得到枚举值对应的名字
enum Color3 { Red = 1, Green, Blue }
let enumName: string = Color3[3];

console.log("枚举,,", enumName)//Blue

//Any(可替代任何类型)

let notSure: any = 4;
notSure = "11";
notSure = false; // boolean
//当你只知道一部分数据的类型时，any类型也是有用的

let Aaylist: any[] = [1, true, "free"];
Aaylist[1] = 100;

console.log("Aaylist,,", Aaylist)//[ 1, 100, 'free' ]


//Void(表示没有任何类型，与Any类型相反)
function abc(): void {
 console.log("你好");
}

console.log("Void,,", abc)//[Function: abc]


//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let void1: void = undefined;
let void2: void = null;


console.log("Void,,", void1, void2)//undefined null


//Null 和 Undefined
let u: undefined = undefined;
let n: null = null;
console.log("Null和Undefined,,", u, n)//undefined null


//类型断言(as或尖括号)

//类型断言有两种形式。 其一是“尖括号”语法：

let s: any = "我是中国人"
let k: number = (<string>s).length;
console.log("类型断言,,", k)//5

//另一个为as语法：
let s1: any = "我是中国人"
let k1: number = (s1 as string).length;
console.log("类型断言,,", k1)//5




//对象静态类型
const aa: {
 name: string,
 age: number
} = {
 name: "你好",
 age: 1
}
console.log("kk,,1,", aa)//{ name: '你好', age: 1 }

