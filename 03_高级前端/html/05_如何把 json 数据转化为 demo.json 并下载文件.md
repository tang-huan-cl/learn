json 视为字符串，可以利用 DataURL 进行下载

Text -> DataURL

除了使用 DataURL，还可以转化为 Object URL 进行下载

Text -> Blob -> Object URL

可以把以下代码直接粘贴到控制台下载文件

```js
function download(url, name) {
  const a = document.createElement("a");
  a.download = name;
  a.rel = "noopener";
  a.href = url;
  // 触发模拟点击
  a.dispatchEvent(new MouseEvent("click"));
  // 或者 a.click()
}
 
const json = {
  a: 3,
  b: 4,
  c: 5,
};
const str = JSON.stringify(json, null, 2);
 
// 方案一：Text -> DataURL
const dataUrl = `data:,${str}`;
download(dataUrl, "demo.json");
 
// 方案二：Text -> Blob -> ObjectURL
const url = URL.createObjectURL(new Blob(str.split("")));
download(url, "demo1.json");
```

### 总结:

1、模拟下载，可以通过新建一个 <a href="url" download><a> 标签并设置 url 及 download 属性来下载

2、可以通过把 json 转化为 dataurl 来构造 URL

3、可以通过把 json 转换为 Blob 再转化为 ObjectURL 来构造 URL


方法一有2个缺点：
1、无法保留缩进
2、字符串里面的空格会被删除


