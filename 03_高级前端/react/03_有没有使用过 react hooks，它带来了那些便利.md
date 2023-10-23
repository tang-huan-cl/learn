

依我的看法，React hooks 主要解决了状态以及副作用难以复用的场景，
除此之外，他对我最大的好处就是在 Console 中不会看到重重叠叠相同名字的组件了(HOC)。



1.HOC嵌套地狱 
2.this 
3.逻辑复用
3.tree-shaking




1.类组件比起函数组件更难以理解。

2.无需修改组件结构的情况下复用状态逻辑，状态管理更加清晰。

3.不用写类函数就可以使用更多的 React 特性。

4.更符合 React 本身的思想，函数式、组件化。

5.组件树层级变浅 （原本的HOC/render props 等方式增加了组件树层数及渲染，在 React DevTools 中观察过 React 应用，你会发现由 providers，consumers，高阶组件，render props 等其他抽象层组成的组件会形成“嵌套地狱”，这些功能都可以通过强大的自定义的 Hooks 来实现。）

6.不用再去考虑 this 的指向、生命周期问题。
















