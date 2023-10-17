

## 浏览器中 Frame 与 Event Loop 的关系是什么

浏览器组成中有两大引擎，JS引擎和渲染引擎。

Frame(帧)是渲染引擎每隔16ms(默认60fps)将渲染树渲染、合成成位图的结果

每次Event Loop是JS引擎执行的一个周期，执行过程中可能依赖渲染引擎的执行结果，比如访问DOM和CSSOM，也可能影响渲染引擎绘制帧，比如调用 requestAnimationFrame，在每个帧开始绘制时执行一段回调函数(通常包含影响渲染结果的代码)


因此 Frame 和 Event Loop 是相对独立运行的，但是 Event Loop 中执行的代码可能依赖或影响 Frame