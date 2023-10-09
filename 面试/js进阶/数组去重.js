
// 定义变量
const arr = [1, 2, 3, 1, 3, 4, 5, 4];

let uniqueArray = [];

// 1.Set结构去重

uniqueArr = Array.from(new Set(arr))

console.log(uniqueArr) // [1, 2, 3, 4, 5]


// 2.reduce方法去重

function deDuplicationArray(array) {

    if (!array || array.length === 0) {

        return [];

    };

    return array.reduce((acc, cur) => {

        if (acc.indexOf(cur) === -1) {

            acc.push(cur);

        }

        return acc;

    }, []);

}

uniqueArr = deDuplicationArray(arr);

console.log(uniqueArr); // [1, 2, 3, 4, 5]