// Service Worker：
// 是运行在浏览器背后的独立进程，一般可以用来实现缓存功能，
// 实现Service Worker的话，必须使用https传输协议，一个实现Service Worker缓存js文件可以如下写

console.log('--------------------->1', navigator);

if ('serviceWorker' in navigator) {

    console.log('--------------------->2', navigator.serviceWorker);

    navigator.serviceWorker.register('./1.js').then(success => {
        console.log('注册成功');
    }).catch(error => {
        console.log('注册失败');
    })
}