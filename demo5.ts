//接口

interface aa {
 label: number
}
const HH1: aa = {
 label: 1,
}
console.log(HH1)//{ label: 1 }


//可选属性(?:)

interface aab {
 label?: number
}
const HH2: aab = {
 label: 1,
}
//修改前
console.log(HH2)//{ label: 1 }
//修改后
HH2.label = 5;
console.log("修改后,,,", HH2)// { label: 5 }

//只读属性(readonly)

interface aabc {
 readonly label2: number
}
let HH3: aabc = {
 label2: 1,
}
//对只读属性进行更改操作
//HH3.label2 = 5; // 无法分配到 "label2" ，因为它是只读属性。

console.log(HH3)

//对数组只读属性(readonlyArray)

let abcd: number[] = [1, 2, 3]
let ro: ReadonlyArray<number> = abcd;
console.log("对数组只读属性,,,,", ro)

//修改后
// ro[0]=12 //类型“readonly number[]”中的索引签名仅允许读取。
//abcd = ro; // error!

//可以用类型断言重写(断言写法：尖括号和as)：
//(数组写法：number[]和Array<number>)
let abcde: string[] = ["1", "2"]
let ro1: ReadonlyArray<string> = abcde;
abcde = ro1 as string[];
// //
// abcde = <Array<string>>ro1
console.log("对数组只读属性,,,,", abcde)


//继承接口

interface aa {
 name: string
}

interface ab extends aa {
 age: number
}

let ab = <ab>{};
let ab1 = ab.name = "blue";
let ab2 = ab.age = 10;
console.log("继承接口,,,,", ab1, ab2)

//一个接口可以继承多个接口，创建出多个接口的合成接口。




interface aa {
 name: string
}

interface Sa {
 sex: string
}

interface Ab extends aa, Sa {
 age: number
}

let de = <Ab>{};
let abc1 = de.name = "blue";
let abc2 = de.sex = "女";
let abc3 = de.age = 10;
console.log("继承接口,,,,", abc1, abc2, abc3)

