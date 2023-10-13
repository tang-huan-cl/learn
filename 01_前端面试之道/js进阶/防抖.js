// 函数防抖：
// 函数防抖的核心思路是利用setTimeout延迟执行某个方法，
// 只有在指定的事件后才执行，中间触发的事件不执行。
// 最常见的函数防抖就是，搜索框只有用户在输入完毕后才去服务器执行查询。

function debounce(fn, delay = 500) {
    var timer = null;

    return function () {
        const self = this;

        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(() => {
            fn.apply(self, arguments);
        }, delay);
    }
}

window.onresize = debounce(function () {
    console.log('window onresize end');
}, 1000)