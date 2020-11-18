//基础静态类型
var a = 1;
var b = "哈哈";
var c = true;
console.log("基础类型,,,", a, b, c); //1 哈哈 true
//数组写法（2种）
var list = [1, 2, 3];
var list2 = [1, 2, 3];
console.log("数组,,,", list, list2); //[ 1, 2, 3 ] [ 1, 2, 3 ]
//元祖
var d = ["1", 1];
console.log("元祖,,,", d); //[ '1', 1 ]
//枚举(关键字：enum)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var g = Color.Green;
console.log("枚举,,", g); //1,默认情况下，从0开始为元素编号，Green在第一位。
//全部都采用手动赋值
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 3] = "Green";
    Color1[Color1["Blue"] = 5] = "Blue";
})(Color1 || (Color1 = {}));
var h = Color1.Green;
console.log("枚举,,", h); //3
//初始值从1开始编号
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var i = Color2.Green;
console.log("枚举,,", i); //2
//通过枚举的值得到枚举值对应的名字
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
var enumName = Color3[3];
console.log("枚举,,", enumName); //Blue
//Any(可替代任何类型)
var notSure = 4;
notSure = "11";
notSure = false; // boolean
//当你只知道一部分数据的类型时，any类型也是有用的
var Aaylist = [1, true, "free"];
Aaylist[1] = 100;
console.log("Aaylist,,", Aaylist); //[ 1, 100, 'free' ]
//Void(表示没有任何类型，与Any类型相反)
function abc() {
    console.log("你好");
}
console.log("Void,,", abc); //[Function: abc]
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
var void1 = undefined;
var void2 = null;
console.log("Void,,", void1, void2); //undefined null
//Null 和 Undefined
var u = undefined;
var n = null;
console.log("Null和Undefined,,", u, n); //undefined null
//类型断言
//类型断言有两种形式。 其一是“尖括号”语法：
var s = "我是中国人";
var k = s.length;
console.log("类型断言,,", k); //16
//另一个为as语法：
var s1 = "我是中国人";
var k1 = s1.length;
console.log("类型断言,,", k1); //16
//对象静态类型
var aa = {
    name: "你好",
    age: 1
};
console.log("kk,,1,", aa); //{ name: '你好', age: 1 }
