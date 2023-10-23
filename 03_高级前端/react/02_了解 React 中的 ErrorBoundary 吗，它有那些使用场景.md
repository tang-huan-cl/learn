

# 了解 React 中的 ErrorBoundary 吗，它有那些使用场景

> 从其他文章里看到的 避免错误渲染白屏做异常中间处理的嵌套组件

是 react 内的一个钩子，用于在组件内发生了 js 错误时候的错误处理。 使用场景是在发生 js 报错的时候不至于说白屏，可以转去别的页面提示用户这里报了错，转用别的去到去继续操作。


了解 React 中的 ErrorBoundary 吗，它有那些使用场景


## ErrorBoundary
ErrorBoundary可以在任务子组件中捕获js错误，只需在根组件中定义一次，即可捕获所有子组件的错误。

然有以下4种错误除外：
1、事件处理函数中使用try catch
2、异步函数（setTimeout）
3、服务端渲染
4、当前ErrorBoundary抛出的错误














