
# 如何实现一个简单的 Promise

1、当 pending 时， thenable 函数由一个队列维护

2、当状态变为 resolved(fulfilled) 时，队列中所有 thenable 函数执行

3、当 resolved 时， thenable 函数直接执行

4、rejected 状态同理

```js
class Prom {
    static PENDING = "pending";
    static RESOLVED = "resolve";
    static REJECTED = "rejected";

    static resolve(value) {
        if (value && value.then) {
        return value;
        }
        return new Prom((resolve) => resolve(value));
    }

    static reject(value) {
        return new Prom((_, reject) => reject(value));
    }
 
    constructor(fn) {
        this.value = undefined; // 结果值
        this.reason = undefined; // 记录错误
        this.status = Prom.PENDING; // 状态
    
        // 维护一个 resolve/pending 的函数队列
        this.resolveFns = []; // 成功回调
        this.rejectFns = []; // 失败回调
    
        const resolve = (value) => {
            if (this.status === Prom.PENDING) {
                // 注意此处的 setTimeout
                setTimeout(() => {
                    this.status = Prom.RESOLVED;
                    this.value = value;
                    this.resolveFns.forEach(({ fn, resolve: res, reject: rej }) =>
                        res(fn(value)),
                    );
                });
            }
        };

        const reject = (e) => {
            if (this.status === Prom.PENDING) {
                setTimeout(() => {
                    this.status = Prom.REJECTED;
                    this.reason = e;
                    this.rejectFns.forEach(({ fn, resolve: res, reject: rej }) =>
                        rej(fn(e)),
                    );
                });
            }
        };
    
        try {
            fn(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
 
    then(fn) {
        fn = typeof fn === "function" ? fn : (value) => value;
    
        if (this.status === Prom.RESOLVED) { // 成功状态
            const result = fn(this.value); 
            // 需要返回一个 Promise
            // 如果状态为 resolved，直接执行
            return Prom.resolve(result);
        }

        if (this.status === Prom.PENDING) { // pending状态
            // 也是返回一个 Promise
            return new Prom((resolve, reject) => {
                // 推进队列中，resolved 后统一执行
                this.resolveFns.push({ fn, resolve, reject });
            });
        }
    }

    catch(fn) {
        if (this.status === Prom.REJECTED) { // 失败状态
        const result = fn(this.value);
            return Prom.resolve(result);
        }

        if (this.status === Prom.PENDING) { // pending状态
        return new Prom((resolve, reject) => {
            this.rejectFns.push({ fn, resolve, reject });
        });
        }
    }
}
    
Prom.resolve(10)
.then((o) => o * 10)
.then((o) => o + 10)
.then((o) => {
    console.log(o);
});

return new Prom((resolve, reject) => reject("Error")).catch((e) => {
console.log("Error", e);
});

```