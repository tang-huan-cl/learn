


// 分时函数案例：
// 把1秒创建1000个DOM节点，
// 改成每隔200毫秒创建10个节点，这样不用短时间在页面中创建大量的DOM。

/**
 * 
 * @param {*} arr DOM节点
 * @param {*} fn 
 * @param {*} count 创建10个节点
 * @param {*} interval 隔200毫秒
 * @returns 
 */
var timeChunk = function (arr, fn, count, interval) {

    var timer = null;

    var data = null;

    var start = function () {
        for (var i = 0; i < Math.min(count || 1, arr.length); i++) {
            const a = arr.shift();
            console.log('------------------->1', a, arr);
            fn(a)
        }
    }

    return function () {
        timer = setInterval(function () {
            if (arr.length == 0) {
                clearInterval(timer);
                timer = null;
                return;
            }
            start();
        }, interval || 200)
    }
}

var arr = [];

for (var i = 0; i < 1000; i++) {
    arr.push(i);
}

var renderDOMList = timeChunk(arr, function (data) {
    var div = document.createElement('div');
    div.innerHTML = data;
    document.body.appendChild(div);
}, 10, 200);

renderDOMList();
