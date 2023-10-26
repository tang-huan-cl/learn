

#  如何实现一个函数 lodash.merge

## 事例：
```js

// merge array
var object = {
  a: [{ b: 2 }, { d: 4 }],
};

merge(object, { a: [{ c: 3 }, { e: 5 }] });
console.log(object); 
// {
//     "a": [
//         {
//             "b": 2
//         },
//         {
//             "d": 4
//         },
//         {
//             "c": 3
//         },
//         {
//             "e": 5
//         }
//     ]
// }
// merge object
var object = {
  a: { b: { c: 1 } },
};
merge(object, { a: { b: { d: 2 } } });
console.log(object);
//  {
//     "a": {
//         "b": {
//             "c": 1,
//             "d": 2
//         }
//     }
// }

// overwrite primitive value
object = {
  a: { b: 1 },
};
merge(object, { a: { b: 2 } });
console.log(object);
// {
//     "a": {
//         "b": 2
//     }
// }

 // skip undefined
object = {
  a: { b: 1 },
};
merge(object, { a: { b: undefined } });
console.log(object);
//  {
//     "a": {
//         "b": 1
//     }
// }

// multiple sources
var object = {
  a: { b: { c: 1, d: [1] } },
};
merge(object, { a: { b: { e: 2 } } }, { a: { b: { d: [2] } } });
console.log(JSON.stringify(object)); // {"a":{"b":{"c":1,"d":[1,2],"e":2}}}
```


## 代码:
```js
const getRawType = (val) => {
  return Object.prototype.toString.call(val).slice(8, -1);
};

const isPlainObject = (val) => {
  return getRawType(val) === "Object";
};
 
const isPlainObjectOrArray = (val) => {
  return isPlainObject(val) || Array.isArray(val);
};

const merge = (object, ...sources) => {
  for (const source of sources) { // 多个合并

    for (const key in source) { // 单个

      if (source[key] === undefined && key in object) return continue; // 边界情况

      if (isPlainObjectOrArray(source[key])) { // 复杂类型

        if ( // 复杂类型 且类型相同
          isPlainObjectOrArray(object[key]) &&
          getRawType(object[key]) === getRawType(source[key])
        ) {

          if (isPlainObject(object[key])) { // 对象

            merge(object[key], source[key]);

          } else { // 数组

            object[key] = object[key].concat(source[key]);

          }

        } else { // 非复杂类型 或者 类型不相同

          object[key] = source[key];

        }

      } else { // 简单类型

        object[key] = source[key];

      }
    }
  }
};

```













