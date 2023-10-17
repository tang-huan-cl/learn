

## React/Vue 中的 router 实现原理如何

前端路由实现的本质是监听url变化，实现方式有两种：
- Hash模式
- History模式

无需刷新页面就能重新加载相应的页面。

Hash url的格式为: www.a.com/#/，当#后的哈希值发生变化时，通过hashchange事件监听，然后页面跳转。 

History url通过: history.pushState和history.replaceState改变url。 

两种模式的区别：

- 表现形式： hash只能改变#后的值，而history模式可以随意设置同源url；

- 携带数据： hash只能添加字符串类的数据，而history可以通过API添加多种类型的数据；

- 历史记录： hash的历史记录只显示之前的www.a.com而不会显示hash值，而history的每条记录都会进入到历史记录；

- 后端路由处理： hash无需后端配置且兼容性好，而history需要配置index.html用于匹配不到资源的情况。




## 前端路由有两种实现方式:

### history API

- 通过 history.pushState() 跳转路由
- 通过 popstate event 监听路由变化，但无法监听到 history.pushState() 时的路由变化


### hash

- 通过 location.hash 跳转路由
- 通过 hashchange event 监听路由变化




