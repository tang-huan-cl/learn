## 1. BEM 式: .home-page .home-page-btn

.home-page {
  .home-page-btn {
  }
}

BEM 有一个缺点，就是有些太长，可适当简化，只包裹该页面组件的根类名，但有可能增加样式冲突的风险

.home-page {
  .btn {
  }
}


## 2. CSS Scoped

scoped css 会对当前组件(scope)下所有元素生成唯一的属性或类名，对所有 CSS 规则将携带唯一属性实现作用域的命名保护

// 手动写
.btn {
}
 
// 编译后
.btn .jsx-1287234 {
}


## 3. CSS Module

css-modules repo
css-modules demo
module css 会对类名进行 hash 化

```javascript
import React, { Component } from 'react';
import styles from './ScopedSelectors.css';

export default class ScopedSelectors extends Component {

  render() {
    return (
      <div className={ styles.root }>
        <p className={ styles.text }>Scoped Selectors</p>
      </div>
    );
  }

};
```

```css
.root {
  border-width: 2px;
  border-style: solid;
  border-color: #777;
  padding: 0 20px;
  margin: 0 6px;
  max-width: 400px;
}

.text {
  color: #777;
  font-size: 24px;
  font-family: helvetica, arial, sans-serif;
  font-weight: 600;
}
```