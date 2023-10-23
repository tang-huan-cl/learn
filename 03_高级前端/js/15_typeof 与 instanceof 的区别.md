

# typeof 与 instanceof 的区别


- typeof 用以判断基础数据类型 (null 除外)
- instanceOf 借助原型链判断复杂数据类型

```js
typeof 能够准确检查除了 null 之外的基础数据类型(number, string, symbol, bigInt, undefined, boolean, null)
```

> instanceof 的语义是检查操作符右边的函数原型是否存在于左边对象的原型链中





















