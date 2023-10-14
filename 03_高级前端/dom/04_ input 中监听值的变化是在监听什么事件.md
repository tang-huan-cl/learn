

## 可以实时监听值的变化的事件有以下几种

* keypress
* keydown
* keyup
* input

> 注: onChange 无法做到实时监听，因为 onChange 需要失去焦点才能触发


### oninput
不用考虑是否失去焦点，不管js操作还是键盘鼠标手动操作，只要HTML元素属性发生改变即可立即捕获到


### onchange:

Supported HTML tags:

```html
<input type="checkbox">
<input type="file">
<input type="password">
<input type="radio">
<input type="range">
<input type="search">
<input type="text">
<select> and <textarea>
```

oninput实时触发，onchange失去焦点时触发

