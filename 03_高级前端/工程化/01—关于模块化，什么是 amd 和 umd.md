

# 关于模块化，什么是 amd 和 umd

amd 是一种浏览器中的模块格式，关键字为 define，cjs 是一种 Node 中的模块格式，也是广为人所熟悉的 require/exports。

而 umd 是 amd 与 cjs 两种格式的兼容。既可以跑在浏览器，又可以跑在 Node 中

amd
```js
define(["jquery", "underscore"], function ($, _) {});
```

umd
```js
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = factory(require("jquery"));
  } else {
    // 全局变量
    root.returnExports = factory(root.jQuery);
  }
})(this, function ($) {
  // ...
});
```