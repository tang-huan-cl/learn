

标准盒模型:
width = content-width 
height = content-height


怪异盒模型:
width = content-width + padding + border 
height = content-height + padding + border


CSS 的盒模型主要包括以下两种，可通过 box-sizing 属性进行配置：

content-box：默认属性。width 只包含 content
border-box：width 包含 (content、padding、border)
