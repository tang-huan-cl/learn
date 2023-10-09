


// AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，

// 这些跟业务逻辑无关的功能通常包括日志统计，安全控制，异常处理等。

// 把这些功能抽离出来后，再通过动态织入的方式掺入业务逻辑模块中

Function.prototype.before = function (beforeFn) {
    const self = this
    return function beforeFunc() {
        const args = arguments;
        beforeFn.apply(this, args);
        console.log('----------------->1');
        return self.apply(this, args)
    }
}

Function.prototype.after = function (afterFn) {
    const self = this
    return function afterFunc() {
        const args = arguments;
        const result = self.apply(this, args);
        console.log('----------------->2');

        afterFn.apply(this, args);
        return result
    }
}

function func() {
    console.log('2');
}

const newFunc = func.before(() => {
    console.log('1');
}).after(() => {
    console.log('3');
})

newFunc() // 1 2 3