// 事件系统包括如下几个方法：

// on监听事件方法。
// off取消监听事件方法。
// emit触发事件方法。
// once绑定一次事件监听方法。

/**
 * 回调函数
 * @param {*} callback 回调
 * @param {*} context 上下文
 * @param {*} args 参数
 */
function invokeCallback(callback, context, args) {
    try {
        callback && callback.apply(context, args)
    } catch {
        console.log('invoke callback error')
    }
}

const event = {
    // 事件
    subs: {},

    // 注册监听事件方法
    on: function (event, callback) {
        // 数组
        if (Array.isArray(event)) {
            for (let index = 0; index < event.length; index++) {
                this.on(event[index], callback)
            }
            // 监听事件
        } else {
            // 注册监听事件
            if (!this.subs[event]) {
                this.subs[event] = []
            }

            this.subs[event].push(callback)
        }
    },

    // 取消监听事件方法
    off: function (event, callback) {
        // 1、一个参数都没有，解绑全部
        // 2、只传event，解绑改event所有事件
        // 3、两个参数都传递，只移除指定某一个
        if (!arguments.length) {
            this.subs = Object.create(null)
            return;
        }

        if (Array.isArray(event)) {
            for (let index = 0; index < event.length; index++) {
                this.off(event[index], callback)
            }
            return
        }

        const cbs = this.subs[event]
        if (!cbs || cbs.length === 0) {
            return
        }
        if (!callback) {
            this.subs[event] = null
            return
        }
        let cb;
        let i = cbs.length
        while (i--) {
            cb = cbs[i]
            if (cb === callback || cb.fn === callback) {
                cbs.splice(i, 1)
                break
            }
        }
    },
    once: function (event, callback) {
        const self = this;
        function on() {
            self.off(event, on);
            callback.apply(self, arguments);
        }
        this.on(event, on)
    },
    emit: function (event) {
        const cbs = this.subs[event]
        if (cbs && cbs.length > 0) {
            const args = [...arguments].slice(1)
            for (let index = 0, len = cbs.length; index < len; index++) {
                invokeCallback(cbs[index], this, args)
            }
        }
    }
}

const speakCallback1 = () => {
    console.log('speak callback1')
}
const speakCallback2 = () => {
    console.log('speak callback2')
}
const combineCallback = () => {
    console.log('write or listen callback')
}
const runningCallback1 = (msg) => {
    console.log('running callback1')
}
const runningCallback2 = (msg) => {
    console.log('running callback2')
}

event.on('speak', speakCallback1);
event.on('speak', speakCallback2);
event.on(['write', 'listen'], combineCallback);
event.once('running', runningCallback1);
event.once('running', runningCallback2);

event.emit('speak');   // speak callback1, speak callback2
event.emit('running'); // running callback1
event.emit('running'); // running callback2
event.emit('write');   // write or listen callback

event.off('speak', speakCallback1)
event.off(['write', 'listen'])
event.emit('speak')   // speak callback2
event.emit('write')   //
event.emit('listen')  // 

event.off()
event.emit('speak')   // 
event.emit('running') //