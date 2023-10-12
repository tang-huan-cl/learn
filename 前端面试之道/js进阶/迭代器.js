
// 自定义对象属性值迭代器，使之能使用for of循环遍历对象属性的值

var obj = {
    name: 'AAA',
    age: 23,
    address: '广州'
}

Object.defineProperty(obj, Symbol.iterator, {
    writable: false,
    enumerable: false,
    configurable: true,
    value: function () {
        var self = this;
        var index = 0;
        var keys = Object.keys(self);
        return {
            next: function () {
                return {
                    done: index >= keys.length,
                    value: self[keys[index++]]
                }
            }
        }
    }
})
for (const val of obj) {
    console.log(`属性值为：${val}`);
}
