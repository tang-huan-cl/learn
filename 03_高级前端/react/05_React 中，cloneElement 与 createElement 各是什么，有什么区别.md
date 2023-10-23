

# React 中，cloneElement 与 createElement 各是什么，有什么区别

```js
React.cloneElement(element, [props], [...children]);
 
React.createElement(type, [props], [...children]);
```

直接上 API，很容易得出结论：首参不一样。这也是他们的最大区别：

- cloneElement，根据 Element 生成新的 Element
- createElement，根据 Type 生成新的 Element


## React.cloneElement 的使用场景

### createElement：

- 第一个参数是 type 简单来说就是各种 标签名字（包括 HTML 自身的，还有 React 组件名字）
- 第二个参数是传入的属性
- 第三个参数以及之后的参数就是作为组件的子组件 JSX 编写的代码就是转换为这个方法，一般用了 JSX 写法都不会再需要自己直接调用 该方法




cloneElement

- 第一个参数是 一个 React 元素
- 新添加的属性会并入原有的属性 一般配合 React.children.map使用，如用于动态地给子组件添加更多 props 信息、样式

更深一点的原因在于，React 元素是 不可变对象 例如 props.children 获取到的只是一个 描述符，不能直接修改它的任何属性，只能读取他的信息。 所以我们可以选择拷贝它们，然后再修改、添加









