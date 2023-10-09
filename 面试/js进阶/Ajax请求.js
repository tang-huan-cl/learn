// 原生ajax步骤

// 创建XMLHttpRequest对象
// 使用open方法设置和服务器的交互信息
// 使用send发送数据
// 注册事件

// get请求

// const ajax = () => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('get', 'https://www.baidu.com/getUserInfo?name=AAA&age=18');

//     xhr.send();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log('请求成功');
//         }
//     }
// }

// post请求

var xhr = new XMLHttpRequest();

xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhr.open('post', 'https://www.baidu.com/getUserInfo');

xhr.send('name=AAA&age=18');

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('请求成功');
    }
}