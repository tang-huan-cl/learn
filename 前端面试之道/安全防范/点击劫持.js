



点击劫持是一种视觉欺骗的攻击手段。
攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，
并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。


// 防御手段
// 设置HTTP响应头X - FRAME - OPTIONS，
// 它可以设置DENY、SAMEORIGIN、ALLOW - FROM分别表示不允许iframe展示、
// 只允许同源iframe展示、表示页面可以在指定来源的iframe中展示。

