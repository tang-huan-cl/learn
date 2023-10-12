"use strict";
var Person = /** @class */ (function () {
    function Person(_a) {
        var age = _a.age;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log(this.age);
    };
    return Person;
}());
var p = new Person({ age: 123 });
console.log('----------->1', p.sayHello());
