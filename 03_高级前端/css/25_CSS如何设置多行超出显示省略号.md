
## CSS如何设置多行超出显示省略号

使用 -webkit-line-clamp 来设置多行超出显示省略号

```css
.box {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
```

```css
.box {
  width: 200px;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

先设置宽度 加上word-wrap属性达到换行的目的
利用-webkit-line-clamp限制行数 利用overflow属性隐藏所省略