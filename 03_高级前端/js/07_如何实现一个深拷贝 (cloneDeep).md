
# 如何实现一个深拷贝 (cloneDeep)

```js
const obj = {
  re: /hello/,
  f() {},
  date: new Date(),
  map: new Map(),
  list: [1, 2, 3],
  a: 3,
  b: 4,
};
 
cloneDeep(obj);
```

```js
const oldJson = { a: 1 };
const newJson = JSON.parse(JSON.stringify(oldJson));
oldJson.a = 2;
console.log(oldJson); // {a: 2}
console.log(newJson); // {a: 1}
```

```js
 function deepCopy(obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
        result[key] = deepCopy(obj[key]);   //递归复制
        } else {
        result[key] = obj[key];
        }
    }
    }
    return result;
}
```

```js
/**
 * 深拷贝关注点:
 * 1. JavaScript内置对象的复制: Set、Map、Date、Regex等
 * 2. 循环引用问题
 * @param {*} object
 * @returns
 */
function deepClone(source, memory) {
    const isPrimitive = (value) => {
        return /Number|Boolean|String|Null|Undefined|Symbol|Function/.test(
        Object.prototype.toString.call(value),
        );
    };

    let result = null;
    memory || (memory = new WeakMap());

    // 原始数据类型及函数
    if (isPrimitive(source)) {
        console.log("current copy is primitive", source);
        result = source;
    }

    // 数组
    else if (Array.isArray(source)) {
        result = source.map((value) => deepClone(value, memory));
    }

    // 内置对象Date、Regex
    else if (Object.prototype.toString.call(source) === "[object Date]") {
        result = new Date(source);
    } else if (Object.prototype.toString.call(source) === "[object Regex]") {
        result = new RegExp(source);
    }

    // 内置对象Set、Map
    else if (Object.prototype.toString.call(source) === "[object Set]") {
        result = new Set();
        for (const value of source) {
            result.add(deepClone(value, memory));
        }
    } else if (Object.prototype.toString.call(source) === "[object Map]") {
        result = new Map();
        for (const [key, value] of source.entries()) {
            result.set(key, deepClone(value, memory));
        }
    }

    // 引用类型
    else {
        if (memory.has(source)) {
            result = memory.get(source);
        } else {
            result = Object.create(null);
            memory.set(source, result);
            Object.keys(source).forEach((key) => {
                const value = source[key];
                result[key] = deepClone(value, memory);
            });
        }
    }
    
    return result;
}
```