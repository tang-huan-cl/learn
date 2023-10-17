

## 浏览器中监听事件函数 addEventListener 第三个参数有那些值

- capture。监听器会在时间捕获阶段传播到event.target时触发。

- passive。监听器不会调用preventDefault()。

- once。监听器只会执行一次，执行后移除。

- singal。调用abort()移除监听器。
