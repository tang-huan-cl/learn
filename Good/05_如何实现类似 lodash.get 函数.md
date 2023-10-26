

# 如何实现类似 lodash.get 函数

## 测试用例：

```js
const object = { a: [{ b: { c: 3 } }] };
 
//=> 3
get(object, "a[0].b.c");
 
//=> 3
get(object, 'a[0]["b"]["c"]');
 
//=> 10086
get(object, "a[100].b.c", 10086);
```


### 代码：

```js

const is =  {
    Obj : () => Object.prototype.toString.call(context) === "[object Object]";
    arr: () => Object.prototype.toString.call(context) === "[object Array]";
}

function getValue(source, path, defaultValue = undefined) {

    if(!is.Obj(source) && !is.arr(source)) {
        return defaultValue;
    }

    // a[3].b -> a.3.b -> [a, 3, b]
    const paths = path
        .replace(/\[(\w+)\]/g, ".$1")
        .replace(/\["(\w+)"\]/g, ".$1")
        .replace(/\['(\w+)'\]/g, ".$1")
        .split(".");

    let result = source;

    for (const p of paths) {
        result = result?.[p];
    }
    return result === undefined ? defaultValue : result;
}
```












