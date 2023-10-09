// 通用的柯里化
var currying = function (fn) {
    var args = [];
    return function () {
        if (arguments.length == 0) {
            return fn.apply(this, args);
        } else {
            Array.prototype.push.apply(args, arguments);
            console.log('-------------->1', arguments);
            return arguments.callee;
        }
    }
}

var cost = (function () {
    var money = 0;
    return function () {
        for (var i = 0, len = arguments.length; i < len; i++) {
            money += arguments[i];
        }
        return money;
    }
})()

var cost = currying(cost);
cost(100);
cost(200);
cost(20);
cost(10);
console.log(cost()); // 输出330




// 给定一个函数Add,需要支持以下形式的调用：
// Add(1)(2)(3).sumOf(); // 6
// Add(1, 2)(3)(4).sumOf(); // 10
// Add(1, 2, ...)(3)(3, ...).sumOf(); // ...

function Add() {
    if (!Add.nums) {
        Add.nums = [];
    }

    Add.nums.push(...arguments);

    return Add;
}

Add.sumOf = () => {
    return Add.nums.reduce((a, b) => a + b);
}

// 考查知识点：
// 闭包、递归、作用域、函数、对象