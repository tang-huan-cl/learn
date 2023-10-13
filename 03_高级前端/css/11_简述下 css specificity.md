## 简述下 css specificity

css specificity 即 css 中关于选择器的权重，以下三种类型的选择器依次下降

- id 选择器，如 #app
- class、attribute 与 pseudo-classes 选择器，如 .header、[type="radio"] 与 :hover
- type 标签选择器和伪元素选择器，如 h1、p 和 ::before
- 其中通配符选择器 *，组合选择器 + ~ >，否定伪类选择器 :not() 对优先级无影响

另有内联样式 <div class="foo" style="color: red;"></div> 及 !important(最高) 具有更高的权重