function AA() {
 let a: number = 11113;
 console.log(a)
}
AA()

/**
 * 1.tsc demo1.ts，这个时候会多出一个demo1.js文件
 * 2. node demo1.js 则会看见打印信息
 *
 * npm i —g ts-node 安装后可以将两步操作简化为一步操作
 * ts-node  demo1.ts
*/

function getTotal(one: number, two: number): number {
 return one + two;
}

const total = getTotal(1, 2);

console.log(total)// Type 'string' is not assignable to type 'number'.



interface Person {
 name: string;
 age: number;
}

let tom: Person = {
 name: 'Tom',
 age: 16

};
console.log(tom)

// Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.


interface Person {
 name: string;
}

let tom1: Person = {
 name: 'Tom',
 age: 18

};
console.log(tom1)