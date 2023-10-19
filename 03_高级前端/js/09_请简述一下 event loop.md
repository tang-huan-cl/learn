
> heap（堆）：对象被分配在堆中，堆是一个用来表示一大块（通常是非结构化的）内存区域的计算机术语。

> stack（栈）：函数调用形成了一个由若干帧组成的栈。

> WebAPIS：囊括 Web 强大脚本能力的每个 API 参考资料， 包括 DOM 、所有相关的 APIs 及可以用来构建 Web 的相关接口。

> 队列（event queue || Callback Queue）：一个 JavaScript 运行时包含了一个待处理消息的消息队列。每一个消息都关联着一个用以处理这个消息的回调函数

```js
setTimeout(() => {
    console.log(1)
}, 100)
console.log(2);
setTimeout(() => {
    console.log(3)
}, 0)
// 2
// 3
// 1
```

因为JS是单线程的，单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。

为了解决排除等待问题，JS的任务分为同步任务（synchronous）和异步任务（asynchronous）。 

所有同步任务都在主线程上执行，形成一个Stack。

异步任务（如果是WebAPI 则会进入WebAPI，例如ajax setTimeout）不进入主线程，而是进入另一 Callback Queue。

同步任务顺序执行，只有执行栈中的同步任务执行完了，系统才回读取任务队列中可以执行的异步任务，
才会把此异步任务从事件队列中放入执行栈中执行，如此循环，直至所有任务执行完毕。

这就是EventLoop


