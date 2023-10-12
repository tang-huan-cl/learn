// 案例只实现了简易的深拷贝函数，工作中推荐使用lodash的深拷贝方法。

function isObj(obj) {
    return (typeof obj === 'object') && obj !== null
}

function deepClone(obj) {
    if (!isObj(obj)) {
        return obj;
    }

    const isArr = Array.isArray(obj);
    const o = isArr ? [] : {};

    Reflect.ownKeys(obj).forEach((key) => {
        const val = obj[key];
        o[key] = isObj(val) ? deepClone(val) : val;
    });

    return o;
}

const obj = {
    id: Symbol('id'),
    name: 'AAA',
    age: 23,
    colors: ['red'],
    job: {
        name: 'FE',
        salary: 200
    },
    sayName: function () {
        console.log('funciton')
    }
}

const cloneObj = deepClone(obj);
console.log(cloneObj.id);
console.log(cloneObj.colors, obj.colors);
console.log(cloneObj.job, obj.job);

obj.job.name = 'UI';

obj.job.salary = 300;
obj.colors.push('green');
obj.sayName();
console.log(cloneObj.colors, obj.colors);
console.log(cloneObj.job, obj.job);
cloneObj.sayName();