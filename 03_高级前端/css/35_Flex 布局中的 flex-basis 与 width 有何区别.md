


## Flex 布局中的 flex-basis 与 width 有何区别


- 当 flex-direction 为 column 时，主轴为纵轴，此时 flex-basis 与 height 对应
flex-basis 的值为理想情况，而在实际情况中可能被压缩


- flex-basis用于在flex布局时候给定项目的一个初始值， 默认情况下是auto，也就是说根据容器宽度去自动计算，width是给定项目固定宽度。

- 当flex布局的主轴是水平方向即flex-direction: row;那么flex-basis设定的就是初始宽度，如果同时存在width，width会覆盖flex-basis属性
当flex布局的主轴是垂直方向即flex-direction: column;那么flex-basis设定的就是初始高度，如果同时存在height，width会覆盖flex-basis属性; demo示例