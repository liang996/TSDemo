function AA() {
    var a = 11113;
    console.log(a);
}
AA();
/**
 * 1.tsc demo1.ts，这个时候会多出一个demo1.js文件
 * 2. node demo1.js 则会看见打印信息
 *
 * npm i —g ts-node 安装后可以将两步操作简化为一步操作
 * ts-node  demo1.ts
*/
function getTotal(one, two) {
    return one + two + "";
}
var total = getTotal(1, 2);
console.log(total); // Type 'string' is not assignable to type 'number'.
var tom = {
    name: 'Tom',
    age: 16
};
console.log(tom);
var tom1 = {
    name: 'Tom',
    age: 18
};
console.log(tom1);
