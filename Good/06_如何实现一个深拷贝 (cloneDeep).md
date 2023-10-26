

# 如何实现一个深拷贝 (cloneDeep)

## 描述

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

## 代码

### 方法一

```js
function cloneDeep (oldJson) {
    try {
        return JSON.parse(JSON.stringify(oldJson));
    } catch (e) {
        throw new Error('深拷贝错误: ', e);
    }
}
```

### 方法二

```js
    const is =  {
        Obj : () => Object.prototype.toString.call(context) === "[object Object]";
        arr: () => Object.prototype.toString.call(context) === "[object Array]";
    }

 function deepCopy(obj) {
    
    if(!is.Obj(obj) && !is.arr(obj)) {
        return obj;
    }

    var result = is.arr(obj) ? [] : {};

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













