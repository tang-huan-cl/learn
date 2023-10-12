function throttle(fn, interval = 500, config = {}) {

    if (typeof fn !== 'function') {
        throw new Error('throttle 第一个参数 非函数');
    }

    let timer = null;
    let { isInitRun = false } = config;

    return function () {
        const args = arguments
        const self = this;

        if (isInitRun) {
            isInitRun = false;
            fn.apply(self, args);
        }

        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(self, args);
                clearTimeout(timer);
                timer = null
            }, interval);
        }
    }
}

// 运用
window.onresize = throttle(function () {
    console.log('window onresize');
}, 1000)