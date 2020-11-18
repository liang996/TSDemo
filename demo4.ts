//解构数组
let [first, second] = [1, 2];

console.log(first); //1
console.log(second); //2

let [first1, ...rest] = [1, 2, 3, 4];
console.log(first); //  1
console.log(rest); //   [ 2, 3, 4]

//解构对象
let o = {
 a11: "foo",
 b11: 12,
 c11: "bar"
};
let { a11, b11 } = o;
console.log("解构对象,,,,", a11, b11); //  foo,12


//你可以在对象里使用...语法创建剩余变量：

let o1 = {
 a12: "foo",
 b12: 12,
 c12: "bar"
};

let { a12, ...passthrough } = o1;
console.log("解构对象,,,,", passthrough); //  { b12: 12, c12: 'bar' }
let total = passthrough.b12 + passthrough.c12.length;
console.log("解构对象,,,,", total); // 15


//属性重命名
let o12 = {
 a13: "foo",
 b13: 12,
 c13: "bar"
};
let { a13: newName1, b13: newName2 } = o12;
console.log("解构对象,,,,", newName1); // foo


