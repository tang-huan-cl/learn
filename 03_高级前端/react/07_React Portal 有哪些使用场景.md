



在以前， react 中所有的组件都会位于 #app 下，而使用 Portals 提供了一种脱离 #app 的组件。

因此 Portals 适合脱离文档流(out of flow) 的组件，特别是:
- position: absolute 
- position: fixed 
的组件。比如模态框，通知，警告，goTop 等。

