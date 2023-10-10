// 同源策略

// 同源策略是指，一个源的客户端脚本在没有明确授权的情况下，
// 不能访问另一个源的客户端脚本。
// 当一个URL和另一个URL，只要协议、域名或者端口号有一个不同，
// 则就会出现跨域。 解决跨域常用方法有：

// JSONP
// CORS
// document.domain
// postMessage


// JSONP实现跨域

// 原理
// JSONP实现跨域的原理是利用script标签没有跨域限制，
// 通过src指向一个ajax的URL，最后跟一个回调函数callback

// function jsonp() {
//     console.log('JSONP实现跨域');
// }

// // 实现自己的JSONP
// var jsonp = function (url, data, callback) {

//     // 回调函数
//     var cbName = 'callback_' + new Date().getTime();

//     // 拼接？
//     var queryString = url.indexOf('?') == -1 ? '?' : '&';

//     // 拼接参数
//     for (var k in data) {
//         queryString += k + '=' + data[k] + '&';
//     }

//     // 拼接回调函数
//     queryString += 'callback=' + cbName;

//     // scripts
//     var script = document.createElement('script');
//     script.src = url + queryString;

//     // 回调函数挂载在window上
//     window[cbName] = function (data) {
//         callback(data);
//         document.body.removeChild(script);
//     };

//     // script
//     document.body.appendChild(script);
// }

// // 实测
// jsonp('http://api.douban.com/v2/movie/in_theaters', { 'count': 1 }, function (data) {
//     console.log(data);
// });





// CORS实现跨域

// CORS：
// CORS需要浏览器和后端同时配合才能生效，
// 后端通过设置Access - Control - Allow - Origin就可以开启哪些域名可以使用CORS跨域，
// 在进行CORS跨域请求时，会出现简单请求或者复杂请求。

// CORS简单请求：当请求方式为get，
// head、post之一并且Content - Type为text /
//     plain、multipart /
//         form - data、application /
//             x - www - form - urlencoded
// 三种之一时，就是简单请求。

// CORS复杂请求：
// 当不符合简单请求时，
// 就是复杂请求，
// 对于复杂请求来说，
// 首先会发送一个option请求，
// 用于知道服务器是否允许跨域请求。

// document.domain实现跨域

// document.domain只能用于二级域名相同的情况下

// 域名a.test.com 和域名b.test.com
// 设置如下代码后，二级域名为test.com的网站都能实现跨域
// document.domain = 'test.com'

// postMessage
// postMessage一般用于获取嵌套在页面中的第三方页面的数据，
// 一个页面发送请求，另外一个页面判断来源并接受请求。


// 父页面发送请求
window.frames[0].postMessage('getcolor', '*');

// 父页面接受请求
window.addEventListener('message', function (e) {
    console.log(e.data); // 打印red
}, false);

// 子页面发送请求
window.addEventListener('message', function (e) {
    window.parent.postMessage('red', '*');
}, false);










