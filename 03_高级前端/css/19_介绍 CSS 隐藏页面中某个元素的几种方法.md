

## 介绍 CSS 隐藏页面中某个元素的几种方法

### CSS

方法一： 
display:none

方法二： 
position:absolute;
top:-1000px;
left:-1000px;

方法三：
opacity: 0;
透明度为0，仍在文档流中，当作用于其上的事件(如点击)仍有效

方法四：
visibility: hidden
透明度为0，仍在文档流中，但作用于其上的事件(如点击)无效，这也是 visibility:hidden 与 opacity: 0 的区别

方法五：
content-visibility
移出文档流，但是再次显示时消耗性能低