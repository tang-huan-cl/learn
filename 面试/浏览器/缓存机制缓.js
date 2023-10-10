


// 一个浏览器数据请求会经历三个步骤：
// 发起网络请求、
// 后端处理、
// 浏览器响应。

// 浏览器缓存可以让我们在第一步和第三步中优化性能。



// 缓存机制
// 缓存位置


// 缓存在不同的位置，它的优先级是不同的，缓存按优先级可以划分为：

// Service Worker可以让我们自由控制应该缓存哪些文件(PWA实现的重要手段)

// Memory Cache(内存缓存)内存缓存读取效率高，但一旦我们关闭了浏览器，内存缓存也就没有了。

// Disk Cache(硬盘缓存)与内存缓存相比，硬盘缓存具有量大以及时效的两大优点。

// Push Cache当前三者缓存都没有命中时，才会读取Push Cache中的缓存信息，
// 但此种方式的缓存信息时间较短，只在会话Session中存在，一旦会话结束也就释放了。

// 当以上缓存都没有命中时，才会发起请求。


// 缓存策略
// TIP

// 通常来说，浏览器缓存策略分为两种：
// 强缓存
// 协商缓存

// 缓存策略可通过HTTP Header来实现。

// 强缓存： 
// 强缓存可以通过设置Expires和Cache-Control来实现，
// 强缓存表示在缓存期间，不需要请求，State Code为200，
// Cache-Control可以组合使用多个指令，常见指令如下所示：


// 协商缓存：
// 协商缓存表示如果缓存过期了，
// 那么就需要重新发起请求验证资源是否有更新，
// 可通过设置HTTP Header的
// Last-Modified和ETag来实现，
// 如果资源没有改变，State Code为304




