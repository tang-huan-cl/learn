

## 位置计算 + 滚动事件 (Scroll) + DataSet API

### 如何判断图片出现在了当前视口

clientTop，offsetTop，clientHeight 以及 scrollTop 各种关于图片的高度作比对

这些高度都代表了什么意思？

这我以前有可能是知道的，那时候我比较单纯，喜欢死磕。我现在想通了，背不过的东西就不要背了

所以它有一个问题：复杂琐碎不好理解！

仅仅知道它静态的高度还不够，我们还需要知道动态的

如何动态？监听 window.scroll 事件


### 如何控制图片的加载

```html
<img data-src="shanyue.jpg" />
```

首先设置一个临时 Data 属性 data-src，控制加载时使用 src 代替 data-src，可利用 DataSet API 实现

```javascript
img.src = img.datset.src
```