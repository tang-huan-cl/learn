

```js
function f(b) {
  console.log(this.a, b);
}
 
//=> 3, 4
f.fakeBind({ a: 3 })(4);
 
//=> 3, 10
f.fakeBind({ a: 3 }, 10)(11);
```

最简单的 bind 一行就可以实现，而在实际面试过程中也不会考察你太多的边界条件

```js
Function.prototype.fakeBind = function (obj, ...args) {
  return (...rest) => this.call(obj, ...args, ...rest);
};
```

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function(o /*, args */) {
    var self = this, boundArgs = arguments;
    return function () {
      var i, args = [];
      for (i = 1; i < boundArgs.length; i++) {
        args.push(boundArgs[i])
      }
      for (i = 0; i < arguments.length; i++) {
        args.push(arguments[i])
     }
     return self.apply(o, args)
    }
  }
}
```

```js
Function.prototype.fakeBind = function (target, ...args) {
  return (...rest) =>
    this.apply(target, args.concat(rest).slice(0, this.length));
};
```

```js
Function.prototype._bind(obj,...args){
  obj.fn = this
  return function(...args){
    const r = obj.fn(...args)
    delete obj.fn
    return  r
  }
}
```
