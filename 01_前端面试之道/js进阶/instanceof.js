// instanceof原理是在对象原型链中是否能找到执行类型的prototype

function myInstanceOf(left, right) {

    if (typeof left !== 'object') {
        return false
    }

    while (true) {
        if (left === null) {
            return false
        }
        if (left.__proto__ === right.prototype) {
            return true
        }
        left = left.__proto__
    }
}
function Person(name) {
    this.name = name
}
const p1 = new Person('AAA')
console.log(myInstanceOf(p1, Person)) // true
console.log(myInstanceOf(p1, Object)) // true
console.log(p1 instanceof Person)     // true
console.log(p1 instanceof Object)     // true