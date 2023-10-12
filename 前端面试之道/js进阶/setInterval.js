
// 用requestAnimationFrame实现自己的setInterval方法


const obj = {
    timer: null,
    setInterval: function (callback, interval) {
        const now = Date.now;
        let startTime = now();
        let endTime = startTime;
        const self = this
        const loop = function () {
            self.timer = requestAnimationFrame(loop)
            endTime = now()
            if (endTime - startTime >= interval) {
                startTime = endTime = now()
                callback && callback()
            }
        }
        this.timer = requestAnimationFrame(loop);

        return this.timer
    },
    clearInterval: function () {
        cancelAnimationFrame(this.timer)
    }
}

let count = 0
const timer = obj.setInterval(() => {
    console.log(count);
    count++
    if (count >= 3) {
        obj.clearInterval()
    }
}, 1000);