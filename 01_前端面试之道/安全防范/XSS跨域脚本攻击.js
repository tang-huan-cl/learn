



// XSS攻击简单来说就是攻击者想尽一切办法把可执行的代码嵌入到页面中，
// 以达到非法窃取某些数据或者破坏的目的。


// 依据情景的不同，XSS攻击可分为几种类型。

// 反射性XSS
// 反射性XSS也叫做非持久性XSS，
// 是指发生请求时，
// XSS代码会出现在请求的URL中，
// 作为参数提交到服务器，
// 服务器接受并响应。
// 响应结果中包含XSS代码，
// 最后通过浏览器进行解析并执行，
// 一个反射性XSS可能如下所示

function ajax(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url.split('?')[1]);
        }, 1500)
    })
}

var url = 'https://www.baidu.com/getUserInfo?name=<script>alert(document.cookie)</script>';

ajax(url).then(data => {
    document.body.insertAdjacentHTML('beforeend', data.split('=')[1])
})



// 存储型XSS:
// 存储型XSS也叫持久性XSS，
// 它的主要攻击方式是将代码发送到服务器，
// 最常见的存储型XSS攻击就是评论或者浏览攻击，
// 一个存储型XSS可能如下图所示：



// XSS防御

// 1、将由用户输入的内容，进行必要的标签转义，包括 <、>、/等

// 2、再服务端设置cookie属性httpOnly防止客户端通过document.cookie读取

// 3、过滤一些危险属性或者方法，例如onerror方法、href属性、src属性等



