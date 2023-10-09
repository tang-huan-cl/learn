// new关键词调用构造函数的过程如下：

// 创建一个空对象，这个对象讲会作为执行构造函数执行之后返回对象的实例。
// 将空对象的__proto__指向构造函数的prototype。
// 将这个空对象赋值给构造函数内部的this，并执行构造函数。
// 根据构造函数的逻辑，返回第一步创建的对象或者构造函数显示的返回值。

function myNew(...args) {
    // 1.获取构造函数
    const constructor = args.shift()
    // 2.创建空对象并设置原型
    const obj = Object.create(constructor.prototype);

    console.log('------------------>1', obj);
    // 3.绑定this并执行构造函数
    const result = constructor.apply(obj, args)
    // 4.返回构造函数显示返回的值或新对象
    return isObject(result) ? result : obj
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}

// 案例一
function Person(name) {
    this.name = name
}

const p1 = myNew(Person, 'AAA');

console.log(p1 instanceof Person);   // true
console.log(p1.name)                // AAA

// 案例二
function Student(name) {
    this.name = name
    return {
        name: 'AAA',
        age: 23
    }
}
const stu = myNew(Student, 'BBB')
console.log(stu instanceof Student) // false
console.log(stu) 