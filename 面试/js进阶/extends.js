function inherit(child, parent) {

    // 1.继承父类原型上的属性
    child.prototype = Object.create(parent.prototype);

    console.log('------------->1', child.prototype.constructor);

    // 2.修复子类的构造函数
    child.prototype.constructor = child;

    console.log('------------->2', child);
    console.log('------------->3', child.prototype);
    console.log('------------->4', child.prototype.constructor);
    console.log('------------->5', child.super);
    console.log('------------->000000', parent);

    // 3.存储父类
    child.super = parent;

    // 4.继承静态属性
    if (Object.setPrototypeOf) {



        Object.setPrototypeOf(child, parent);
        console.log('------------->6', child);
    } else if (child.__proto__) {

        child.__proto__ = parent;
        console.log('------------->7', child);
    } else {

        for (const key in parent) {

            if (parent.hasOwnProperty(key) && !(key in child)) {

                child[key] = parent[key];
                console.log('------------->8', key);
            }
        }
    }
}

// 父类
function Parent(name) {
    this.name = name
    this.parentColors = ['red']
}
Parent.prototype.sayName = function () {
    console.log(this.name)
}
Parent.create = function (name) {
    return new Parent(name)
}
// 子类
function Child(name) {
    this.name = name
    this.childColors = ['green']
}
// 继承
inherit(Child, Parent)

// test
const child1 = new Child('child1')
console.log(child1 instanceof Child)  // true
console.log(child1 instanceof Parent) // true
console.log(child1.name)              // child1
console.log(child1.childColors)       // ['green']
console.log(child1.parentColors)      // undefined
console.log('------------->9', child1);

const child2 = Child.create('child2')
console.log(child2 instanceof Child)  // false
console.log(child2 instanceof Parent) // true
console.log(child2.name)              // child2
console.log(child2.childColors)       // undefined
console.log(child2.parentColors)      // ['red']