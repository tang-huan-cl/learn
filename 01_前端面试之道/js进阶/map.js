// map方法接受两个参数，其中第二个参数为callback回调函数执行时的this。

// while循环方案

// MDN: Array.prototype.map
// Array.prototype.myMap = function (callback, context) {

//     if (this === null) {
//         throw new TypeError('this is null or not defined');
//     }

//     if (typeof callback !== 'function') {
//         throw new TypeError(`${callback} is not a function`);
//     }

//     let arr = Object(this);

//     let thisArg = arguments.length > 1 ? arguments[1] : undefined;

//     console.log('--------------->1', arr);

//     const len = arr.length >>> 0;

//     console.log('--------------->2', arr);

//     let result = new Array(len);

//     let index = 0;

//     while (index < len) {
//         let value, mapValue;

//         if (index in arr) {

//             value = arr[index];

//             mapValue = callback.call(this.thisArg, value, index, arr);

//             result[index] = mapValue
//         }

//         index++;

//     }

//     return result;
// }

// const arr = [1, 2, 3, , 4]
// const myResult = arr.myMap(value => value + 1)
// const originResult = arr.map(value => value + 1)
// console.log(myResult)     // [2, 3, 4, empty, 5]
// console.log(originResult) // [2, 3, 4, empty, 5]


// reduce方案

// MDN: Array.prototype.reduce
Array.prototype.myMap = function (callback, context) {
    return this.reduce((acc, cur, index, array) => {
        acc[index] = callback.call(context, cur, index, array)
        return acc
    }, [])
}
const arr = [1, 2, 3, , 4]
const myResult = arr.myMap(value => value + 1)
const originResult = arr.map(value => value + 1)
console.log(myResult)     // [2, 3, 4, empty, 5]
console.log(originResult) // [2, 3, 4, empty, 5]