


## IntersectionObserver API + DataSet API

### 如何判断图片出现在了当前视口

> 方案二使用的方法是: window.scroll 监听 Element.getBoundingClientRect() 并使用 _.throttle 节流

一系列组合动作太复杂了，于是浏览器出了一个三合一事件: IntersectionObserver API，一个能够监听元素是否到了当前视口的事件，一步到位！

事件回调的参数是 IntersectionObserverEntry 的集合，代表关于是否在可见视口的一系列值

其中，entry.isIntersecting 代表目标元素可见

```javascript
const observer = new IntersectionObserver((changes) => {
  // changes: 目标元素集合
  changes.forEach((change) => {
    // intersectionRatio
    if (change.isIntersecting) {
      const img = change.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});
 
observer.observe(img);
```

当然，IntersectionObserver 除了给图片做懒加载外，还可以对单页应用资源做预加载。



