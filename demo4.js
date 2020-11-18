var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
//解构数组
var _a = [1, 2], first = _a[0], second = _a[1];
console.log(first); //1
console.log(second); //2
var _b = [1, 2, 3, 4], first1 = _b[0], rest = _b.slice(1);
console.log(first); //  1
console.log(rest); //   [ 2, 3, 4]
//解构对象
var o = {
    a11: "foo",
    b11: 12,
    c11: "bar"
};
var a11 = o.a11, b11 = o.b11;
console.log("解构对象,,,,", a11, b11); //  foo,12
//你可以在对象里使用...语法创建剩余变量：
var o1 = {
    a12: "foo",
    b12: 12,
    c12: "bar"
};
var a12 = o1.a12, passthrough = __rest(o1, ["a12"]);
console.log("解构对象,,,,", passthrough); //  { b12: 12, c12: 'bar' }
var total = passthrough.b12 + passthrough.c12.length;
console.log("解构对象,,,,", total); // 15
//属性重命名
var o12 = {
    a13: "foo",
    b13: 12,
    c13: "bar"
};
var newName1 = o12.a13, newName2 = o12.b13;
console.log("解构对象,,,,", newName1); // foo
