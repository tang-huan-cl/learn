// 此小节先介绍reduce方法的实现，再介绍基于reduce方法的两个经典案例。



// MDN: Array.prototype.reduce
Array.prototype.myReduce = function (callback, initialValue) {

    if (this === null) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }

    const array = Object(this);

    const len = array.length >>> 0;

    console.log('-------------->1', len);
    console.log('-------------->2', array);

    let index = 0;

    let result;

    // 处理初始值
    if (arguments.length > 1) {

        result = initialValue;

    } else {
        // example: [,,,,5]
        while (index < len && !(index in array)) {
            index++
        }
        if (index >= len) {
            throw new TypeError('Reduce of empty array with no initial value')
        }
        value = array[index++]
    }

    while (index < len) {
        if (index in array) {
            result = callback(result, array[index], index, array)
        }
        index++
    }
    return result
}

const array = [1, , 2, 3, , , 5]
const myResult = array.myReduce((acc, cur) => acc + cur, 0)
const originResult = array.reduce((acc, cur) => acc + cur, 0)
console.log(myResult)     // 11
console.log(originResult) // 11




// 基于reduce顺序执行promise

function p1(val) {
    return new Promise(resolve => {
        resolve(val * 1)
    })
}
function p2(val) {
    return new Promise(resolve => {
        resolve(val * 2)
    })
}
function p3(val) {
    return val * 3
}
function runPromiseInSequence(promiseArr, val) {
    return promiseArr.reduce((promiseChain, currentFunc) => {
        return promiseChain.then(currentFunc)
    }, Promise.resolve(val))
}

const promiseArr = [p1, p2, p3];

runPromiseInSequence(promiseArr, 1).then(console.log) // 6




// 基于reduce实现管道函数pie

// pie顺序执行每一个参数函数
const pieFunc1 = x => x + 1;
const pieFunc2 = x => x + 2;
const pieFunc3 = x => x + 3;

function pie() {
    const funcArr = [...arguments];
    return function (val) {
        return funcArr.reduce((acc, fn) => {
            return fn(acc);
        }, val)
    }
}

const func1 = pie(pieFunc1, pieFunc2);

const func2 = pie(pieFunc1, pieFunc3);

console.log(func1(0));   // 3

console.log(func2(10));  // 14