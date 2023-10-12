


// DNS解析需要时间，可利用如下代码实现DNS预解析

{/* <link rel="dns-prefetch" href="https://www.baidu.com"> */ }


// 有些资源需要马上使用，可以使用如下代码实现，预加载不会阻塞onload事件

{/* <link rel="preload" href="https://www.baidu.com/logo.png"> */ }


// 将用户大概率会打开的资源进行预渲染，可以提升网页的加载速度
{/* <link rel="prerender" href="https://www.baidu.com/login.html"></link> */ }