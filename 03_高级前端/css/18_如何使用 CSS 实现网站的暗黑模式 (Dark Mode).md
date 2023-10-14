

## 如何使用 CSS 实现网站的暗黑模式 (Dark Mode)


```javascript
@media (prefers-color-scheme: dark) {
  :root {
  }
}
```

实现方式：
```javascript
html[theme="dark-model"] {
  filter: invert(1) hue-rotate(180);
  transition: color 300ms, background-color 300ms; /*过渡动画*/
}
```

解释： css 的 filter属性 是将用于图片上的过滤，颜色变化等图形效果应用与元素上， 上面所使用到的 invert 可以用来反转应用程序的颜色; hue-rotate 是用来改变图像上的应用色颜色 通过invert(1)将白色变成黑色，那么为了适配颜色的变化，网页上的图像的颜色应该也做一个改变，这个改变就是通过hue-rotate(180edg)来实现的 filter属性 其他著名的应用还有: _ blur() 模糊图像 _ opacity() 图像透明程度 _ drop-shadow() 对图像应用阴影效果 _ ...



现在，让我们试着理解下面发生了什么。

CSS filter 属性将模糊或颜色转移等图形效果应用到元素上。滤镜通常用于调整图像、背景和边框的渲染。

对于这种黑暗模式，我们将使用两个滤镜，即 invert 和 hue-rotate

invert滤镜可以帮助反转应用程序的颜色方案，因此，黑色变成了白色，白色变成了黑色，所有颜色也是如此。因此，黑变白，白变黑，所有颜色也是如此。

hue-rotate滤镜可以帮助我们处理所有其他非黑白的颜色。将色调旋转180度，我们确保应用程序的颜色主题不会改变，而只是减弱它的颜色。


这个方法唯一的问题是，它也会反转你应用程序中的所有图像。因此，我们将对所有图像添加相同的规则来反转效果。


```javascript
html[theme='dark-mode'] img{
  filter: invert(1) hue-rotate(180deg);
}
```

而且我们还会给HTML元素添加一个过渡，确保过渡不会变得华而不实！

```javascript
html {
  transition: color 300ms, background-color 300ms;
}
```

