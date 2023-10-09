function create(obj, properties) {
    const strType = typeof obj
    const isObject = strType === 'object' || strType === 'function'
    const isUndefined = strType === 'undefined'
    if (isUndefined || !isObject) {
        throw new TypeError('Object prototype may only be an Object or null')
    }
    // 设置原型
    function F() { }
    F.prototype = obj
    const ret = new F()
    // 兼容第二个参数
    if (properties !== null && properties !== undefined) {
        Object.defineProperties(ret, properties);
    }
    // 兼容null
    if (obj === null) {
        ret.__proto__ = null
    }
    return ret;
}

const obj = {
    age: 23,
    name: 'AAA'
};

const myObj1 = create(obj, {
    address: {
        value: '广东1'
    }
});

const originObj1 = Object.create(obj, {
    address: {
        value: '广东2'
    }
});

console.log(myObj1.name);        // 23
console.log(myObj1.address);     // 广东
console.log(originObj1.name);    // 23
console.log(originObj1.address); // 广东

const myObj2 = create(null)
const originObj2 = Object.create(null)
console.log('toString' in myObj2)     // false
console.log('toString' in originObj2) // false
