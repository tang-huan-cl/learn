

// CSP内容安全策略本质上来说是建立白名单机制，
// 告诉浏览器哪些外部资源可以加载和执行，
// 我们只需要配置，拦截主要交给浏览器。

// 通常有两种方法设置CSP：

// 1、 通过设置HTTP Header的Content-Security-Policy

// 2、通过meta标签来设置，例如：<meta http-equiv="Content-Security-Policy">
