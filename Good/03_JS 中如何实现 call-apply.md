


# JS 中如何实现 call/apply


```js
Function.prototype.myCall = (ctx) => {
    const fn = this;
    let fn = Symbol("fn");
    ctx[fn] = fn;
    const args = Array.from(arguments).slice(1);
    const res = ctx[fn](...args);
    delete ctx[fn];
    return res;
}

Function.prototype.myBind = (ctx, ...rest) => {
    ctx.fn = this;
    return function (...args) {
        const res = ctx.fn(...rest, ...args);
        delete ctx.fn;
        return res;
    };
}

```