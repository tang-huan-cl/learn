

// Object.defineProperty方案

const isObj = (obj) => {
    return typeof obj === 'object' && obj !== null;
}

// /* 观察 */
// function observe(obj) {
//     if (isObj(obj)) {
//         return;
//     }

//     Object.keys(obj).forEach(key => {
//         console.log('--------------------->1', key);
//         defineReactive(obj, key, obj[key]);
//     })
// }

// // 定义反应
// function defineReactive(target, key, val) {
//     // 递归
//     observe(val);

//     Object.defineProperty(target, key, {
//         enumerable: true, // 
//         configurable: true, // 
//         get: function () {
//             console.log('get value', val);
//             return val;
//         },
//         set: function (newVal) {
//             val = newVal;
//             console.log('change value', newVal);
//         }
//     })
// }

// const obj = {
//     name: 'AAA',
//     age: 23,
//     job: {
//         name: 'FE',
//         salary: 1000,
//     }
// }

// observe(obj);

// const name = obj.name;
// obj.name = 'BBB';
// const jobName = obj.job.name;
// obj.job.name = 'fe';


// Proxy方案
function observe(obj) {
    if (!isObj(obj)) {
        return;
    }
    const handler = {
        get: function (target, key) {
            const val = target[key];
            if (isObj(val)) {
                console.log('--------------------->0', val);
                return new Proxy(val, handler)
            }
            console.log('get value', val);
            return Reflect.get(target, key);
        },
        set: function (target, key, val) {
            console.log('change value', val);
            return Reflect.set(target, key, val);
        }
    }
    return new Proxy(obj, handler)
}

const obj = {
    name: 'AAA',
    age: 23,
    job: {
        name: 'FE',
        salary: 1000
    }
}
const proxyObj = observe(obj);
const name = proxyObj.name;
proxyObj.name = 'BBB';
const jobName = proxyObj.job.name;
proxyObj.job.name = 'fe';

console.log('--------------------->1', obj);
console.log('--------------------->2', proxyObj);
