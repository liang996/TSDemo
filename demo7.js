var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var h = { x: 10, y: 20 };
h.x = 5; // Cannot assign to 'x' because it is a read-only property.
var jack = {
    name: 'Tom',
    sex: "男"
};
console.log(jack); //{ name: 'Tom', sex: '男' }
var list = [1, 1, 2, 3, 5];
list.push(66);
console.log(list); //{ name: 'Tom', sex: '男' }
var jack = {
    name: 'Tom',
    sex: "男"
};
console.log(jack);
function getLength(something) {
    return something.length;
}
console.log(getLength);
var Days;
(function (Days) {
    Days[Days["Sun"] = 1] = "Sun";
    Days[Days["Mon"] = 2] = "Mon";
    Days[Days["Tue"] = 3] = "Tue";
    Days[Days["Wed"] = 4] = "Wed";
    Days[Days["Thu"] = 5] = "Thu";
    Days[Days["Fri"] = 6] = "Fri";
    Days[Days["Sat"] = 7] = "Sat";
})(Days || (Days = {}));
;
console.log(Days.Thu); //5
var Color;
(function (Color) {
    Color["color1"] = "blue";
    Color["color2"] = "red";
    Color["color3"] = "pink";
})(Color || (Color = {}));
console.log(Color.color3);
var Humanity = /** @class */ (function () {
    function Humanity() {
    }
    Humanity.prototype.say = function () {
        return this.content;
    };
    return Humanity;
}());
//-------以下属于类的外部--------
var humanity = new Humanity();
humanity.content = '我是内容';
humanity.say();
console.log(humanity.content);
console.log(humanity.say());
var Humanity = /** @class */ (function () {
    function Humanity() {
    }
    Humanity.prototype.say = function () {
        return this.content;
    };
    return Humanity;
}());
//-------以下属于类的外部--------
var humanity = new Humanity();
humanity.content = '我是内容';
console.log(humanity.say());
var Humanity = /** @class */ (function () {
    function Humanity() {
    }
    Humanity.prototype.say = function () {
        return this.content; ////此处不报错
    };
    return Humanity;
}());
//-------以下属于类的外部--------
var humanity = new Humanity();
humanity.content = '我是内容';
console.log(humanity.content);
var Humanity = /** @class */ (function () {
    function Humanity() {
    }
    Humanity.prototype.say = function () {
        return this.content; //此处不报错
    };
    return Humanity;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.sayBye = function () {
        this.content;
    };
    return Teacher;
}(Humanity));
var humanity = new Teacher();
humanity.content = '我是内容'; //Property 'content' is protected and only accessible within class 'Humanity' and its subclasses.
console.log(humanity.sayBye());
var Humanity = /** @class */ (function () {
    function Humanity() {
        this.content = "我是人类";
    }
    Humanity.prototype.sayHello = function () {
        return this.content;
    };
    return Humanity;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.say = function () {
        return "我是学生，继承人类";
    };
    Student.prototype.sayHello = function () {
        return "我是一个大类";
    };
    return Student;
}(Humanity));
var St = new Student();
console.log(St.sayHello());
var Humanity = /** @class */ (function () {
    function Humanity() {
        this.content = "我是人类";
    }
    Humanity.prototype.sayHello = function () {
        return this.content;
    };
    return Humanity;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.say = function () {
        return "我是学生，继承人类";
    };
    Student.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + "，我是一个大类";
    };
    return Student;
}(Humanity));
var St = new Student();
console.log(St.sayHello());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    ;
    return Person;
}());
var person = new Person('tom');
console.log(person.name);
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(_age) {
        this._age = _age;
    }
    Object.defineProperty(Xiaojiejie.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Xiaojiejie;
}());
var dajiao = new Xiaojiejie(28);
console.log(dajiao.age());
var Humanity = /** @class */ (function () {
    function Humanity() {
    }
    Humanity.say = function () {
        return "我是人类";
    };
    return Humanity;
}());
console.log(Humanity.say()); //我是人类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person = new Person('tom');
person.name = 'jack';
console.log(person.name);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('Jack'); //无法创建抽象类的实例。:Cannot create an instance of an abstract class.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + " is eating.");
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom'); //非抽象类“Cat”不实现从类“Animal”继承的抽象成员“sayHi”。
var Humanity = /** @class */ (function () {
    function Humanity(content) {
        this.content = content;
    }
    return Humanity;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.play = function () {
        console.log("" + this.content);
    };
    return Student;
}(Humanity));
var aa = new Student('赛车');
console.log(aa); //Student { content: '赛车' }
