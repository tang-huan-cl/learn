

Data URL是将图片转换为base64直接嵌入到了网页中，使用<img src="data:[MIME type];base64"/>这种方式引用图片，不需要再发请求获取图片。 使用Data URL也有一些缺点：

- base64编码后的图片会比原来的体积大三分之一左右。

- Data URL形式的图片不会缓存下来，每次访问页面都要被下载一次。可以将Data URL写入到CSS文件中随着CSS被缓存下来。

Data URL是前缀为data:协议的URL； 它允许内容创建者向文档中嵌入小文件，比如图片等。 Data URL由四部分组成：

- 前缀data:
- 指示数据类型的MIME类型。例如image/jpeg表示JPEG图像文件；如果此部分被省略，则默认值为text/plain;charset=US-SACII
- 如果为非文本数据，则可选base64做标记
- 数据

```js
data:[mediatype][;base63], data
```