

// const arr = [1, [2, 3], [4, [5, 6]]]

// console.log(arr.flat(1))         // [1, 2, 3, 4, [5, 6]]

// console.log(arr.flat(Infinity))  // [1, 2, 3, 4, 5, 6]

// console.log(arr.flat())  // [1, 2, 3, 4, 5, 6]

// reduce + 递归实现方案

// MDN: 可查看更多flat实现方法

// MDN: 可查看更多flat实现方法
// function flat(arr = [], depth = 1) {
//     if (!isArr(arr)) {
//         throw new Error('arr 非数组');
//     }

//     if (arr.length === 0) {
//         return [];
//     }


//     if (depth <= 0) {
//         return arr.slice();
//     }

//     return arr.reduce((acc, val) => {
//         return isArr(val) ? flat([...acc, ...val], depth - 1) : [...acc, val];
//         // return acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val);
//     }, []);
// }

// const isArr = (arr) => {
//     return Array.isArray(arr)
// }
// const arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]
// const myResult1 = flat(arr, 1)
// const originResult1 = arr.flat(1)
// const myResult2 = flat(arr, Infinity)
// const originResult2 = arr.flat(Infinity)
// console.log(myResult1)      // [1, 2, 3, 1, 2, 3, 4, [2, 3, 4]]
// console.log(originResult1)  // [1, 2, 3, 1, 2, 3, 4, [2, 3, 4]]
// console.log(myResult2)     // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
// console.log(originResult2) // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]


// forEach + 递归实现方案


// MDN: 可查看更多flat实现方法
// function flat(arr = [], depth = 1) {
//     if (arr.length === 0) {
//         return []
//     }
//     const result = [];

//     // 注意：立即执行函书前的语句必须要有分号
//     (function flatFunc(arr, depth) {

//         arr.forEach(item => {
//             if (Array.isArray(item) && depth > 0) {
//                 flatFunc(item, depth - 1)
//             } else {
//                 result.push(item)
//             }
//         })

//     })(arr, depth);

//     return result
// }
// const arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]
// const myResult1 = flat(arr, 1)
// const originResult1 = arr.flat(1)
// const myResult2 = flat(arr, Infinity)
// const originResult2 = arr.flat(Infinity)
// console.log(myResult1)      // [1, 2, 3, 1, 2, 3, 4, [2, 3, 4]]
// console.log(originResult1)  // [1, 2, 3, 1, 2, 3, 4, [2, 3, 4]]
// console.log(myResult2)     // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
// console.log(originResult2) // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

// generator方案
// MDN: 可查看更多flat实现方法

function* flat(arr = [], depth = 1) {
    if (arr.length === 0) {
        return []
    }
    for (const item of arr) {
        if (Array.isArray(item) && depth > 0) {
            yield* flat(item, depth - 1)
        } else {
            yield item
        }
    }
}
const arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]
const myResult1 = [...flat(arr, 1)]
const originResult1 = arr.flat(1)
const myResult2 = [...flat(arr, Infinity)]
const originResult2 = arr.flat(Infinity)
console.log(myResult1)      // [1, 2, 3, 1, 2, 3, 4, [2, 3, 4]]
console.log(originResult1)  // [1, 2, 3, 1, 2, 3, 4, [2, 3, 4]]
console.log(myResult2)     // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
console.log(originResult2) // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]