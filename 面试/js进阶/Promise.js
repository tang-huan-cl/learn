
// 简易Promise： 简易Promise并不完全符合Promise/A+规范，
// 但面试时能写出简易Promise算是已经过关了。

// Promise 的链式调用
// Promise.prototype.then()、Promise.prototype.catch() 和 Promise.prototype.finally() 

// promise三个状态：pending(等待)、resolved(完成)、rejected(拒绝)
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
// 简易Promise
function MyPromise(fn) {
    const self = this;

    self.state = PENDING;

    self.value = null;

    self.resolvedCallbacks = [];

    self.rejectedCallbacks = [];

    // 完成方法
    function resolve(value) {
        if (self.state === PENDING) {
            self.state = RESOLVED;
            self.value = value;
            self.resolvedCallbacks.map(cb => {
                const v = cb(self.value);
                console.log('------->1', v);
                self.value = v;
            });
        }
    }

    // 拒绝方法
    function reject(value) {
        if (self.state === PENDING) {
            self.state = REJECTED;
            self.value = value;
            self.rejectedCallbacks.map(cb => {
                const v = cb(self.value);
                console.log('------->2', v);
                self.value = v;
            });
        }
    }
    // 执行传入的方法
    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
// then方法
MyPromise.prototype.then = function (success, error) {
    const self = this;
    success = typeof success === 'function' ? success : v => {
        return v;
    };
    error = typeof error === 'function' ? error : r => {
        throw r;
    };
    if (self.state === PENDING) {
        // console.log('------->2');
        self.resolvedCallbacks.push(success);
        self.rejectedCallbacks.push(error);
    }
    if (self.state === RESOLVED) {
        const v = success(self.value);
        // console.log('------->1', v);
        self.value = v;
    }
    if (self.state === REJECTED) {
        const v = error(self.value);
        self.value = v;
    }
    return self;
}
// 执行自定义Promise
new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 3000)
}).then(value => {
    console.log(value);
    return 1;
}, error => {
    console.log(error);
}).then(value => {
    console.log(value);
    return 3;
}, error => {
    console.log(error);
}).then(value => {
    console.log(value);
    return 35;
}, error => {
    console.log(error);
})