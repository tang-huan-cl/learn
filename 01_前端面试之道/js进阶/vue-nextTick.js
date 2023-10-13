// nextTick支持两种形式使用方式：

// 回调函数形式。
// 如果当前环节支持Promise，还支持Promise.then的形式。


// this.$nextTick(() => {
//     // callback形式
// })

// this.$nextTick().then(() => {
//     // Promise.then形式
// })

// 基于Vue源码，nextTick手写代码如下：

let pending = false; // 未决的
let timeFunc; // 时间函数
const callbacks = []; // 回调

// 清除回调
function flushCallbacks() {
    pending = false;
    const cbs = callbacks.slice();
    callbacks.length = 0;
    for (let index = 0, len = cbs.length; index < len; index++) {
        cbs[index]();
    }
}

// 调用回调  
function invokeCallback(callback, context) {
    try {
        callback.call(context);
    } catch {
        console.log('invoke nextTick callback error')
    }
}

//  下一个刻度  
function nextTick(cb, context) {
    context = context || window;
    let _resolve;
    callbacks.push(() => {
        if (cb) {
            invokeCallback(cb, context);
        } else if (_resolve) {
            _resolve(context);
        }
    })
    if (!pending) {
        pending = true;
        timeFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(resolve => {
            console.log('----------------->resolve: ', resolve);
            _resolve = resolve;
        })
    }
}

// 定时器
function setTimeFunc() {
    if (typeof Promise !== 'undefined') {
        const p = Promise.resolve();
        timeFunc = () => {
            p.then(flushCallbacks)
        }
    } else if (typeof MutationObserver !== 'undefined') {
        let number = 1
        const observer = new MutationObserver(flushCallbacks)
        const textNode = document.createTextNode(String(number))
        observer.observe(textNode, {
            characterData: true
        })
        timeFunc = () => {
            number = (number + 1) % 2
            textNode.data = number
        }
    } else if (typeof setImmediate !== 'undefined') {
        timeFunc = () => {
            setImmediate(flushCallbacks)
        }
    } else {
        timeFunc = () => {
            setTimeout(flushCallbacks, 0)
        }
    }
}

setTimeFunc();

nextTick(() => {
    console.log('nextTick callback')
})

nextTick().then(() => {
    console.log('nextTick promise')
})
