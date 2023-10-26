

# JSONP 的原理是什么，如何实现

> JSONP，全称 JSON with Padding，为了解决跨域的问题而出现。虽然它只能处理 GET 跨域，虽然现在基本上都使用 CORS 跨域


## JSONP 基于两个原理:


1、动态创建 script，使用 script.src 加载请求跨过跨域
2、script.src 加载的脚本内容为 JSONP: 即 PADDING(JSON) 格式

> 从上可知，使用 JSONP 跨域同样需要服务端的支持。curl 示例

```js
$ curl https://shanyue.tech/api/user?id=100&callback=padding
 
padding({
  "id": 100,
  "name": "shanyue",
  "wechat": "xxxxx",
  "phone": "183xxxxxxxx"
})
```

对于正常的请求有何不同一目了然: 多了一个 callback=padding, 并且响应数据被 padding 包围，这就是 JSONP

那请求数据后，如何处理数据呢？此时的 padding 就是处理数据的函数。我们只需要在前端实现定义好 padding 函数即可

```js
window.padding = handleData;
```

### 基于以上两个原理，这里实现一个简单 jsonp 函数：

```js
function stringify(data) {
  const pairs = Object.entries(data);
  const qs = pairs
    .map(([k, v]) => {
      let noValue = false;
      if (v === null || v === undefined || typeof v === "object") {
        noValue = true;
      }
      return `${encodeURIComponent(k)}=${noValue ? "" : encodeURIComponent(v)}`;
    })
    .join("&");
  return qs;
}

function jsonp_simple({ url, onData, params }) {
  const script = document.createElement("script");
 
  // 一、为了避免全局污染，使用一个随机函数名
  const cbFnName = `JSONP_PADDING_${Math.random().toString().slice(2)}`;
 
  // 二、默认 callback 函数为 cbFnName
  script.src = `${url}?${stringify({ callback: cbFnName, ...params })}`;
 
  // 三、使用 onData 作为 cbFnName 回调函数，接收数据
  window[cbFnName] = onData;
 
  document.body.appendChild(script);
}
 
// 发送 JSONP 请求
jsonp_simple({
  url: "http://localhost:10010",
  params: { id: 10000 },
  onData(data) {
    console.log("Data:", data);
  },
});
```

















