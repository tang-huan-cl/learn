

## getBoundingClientRect API + Scroll with Throttle + DataSet API

### 如何判断图片出现在了当前视口
引入一个新的 API， Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。

getBoundingClientRect示例图

那如何判断图片出现在了当前视口呢，根据示例图示意，代码如下，这个就比较好理解了，就可以很容易地背会(就可以愉快地去面试了)。

```javascript
// clientHeight 代表当前视口的高度
img.getBoundingClientRect().top < document.documentElement.clientHeight;
```

###  监听 window.scroll 事件也优化一下

加个节流器，提高性能。工作中一般使用 lodash.throttle 就可以了，万能的 lodash 啊！

```javascript
_.throttle(func, [(wait = 0)], [(options = {})]);
```
