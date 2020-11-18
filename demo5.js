//接口
var HH1 = {
    label: 1
};
console.log(HH1);
var HH2 = {
    label: 1
};
//修改前
console.log(HH2);
//修改后
HH2.label = 5;
console.log("", HH2);
var HH3 = {
    label2: 1
};
//对只读属性进行更改操作
//HH3.label2 = 5; // 无法分配到 "label2" ，因为它是只读属性。
console.log(HH3);
//对数组只读属性(readonlyArray)
var abcd = [1, 2, 3];
var ro = abcd;
console.log("对数组只读属性,,,,", ro);
//修改后
// ro[0]=12 //类型“readonly number[]”中的索引签名仅允许读取。
//abcd = ro; // error!
//可以用类型断言重写(断言写法：尖括号和as)：
//(数组写法：number[]和Array<number>)
var abcde = ["1", "2"];
var ro1 = abcde;
abcde = ro1;
// //
// abcde = <Array<string>>ro1
console.log("对数组只读属性,,,,", abcde);
