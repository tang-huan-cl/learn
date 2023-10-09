// 图片懒加载是一种常用的技术，
// 如果直接给某个img标签设置src属性，
// 由于图片过大或者网络不佳，
// 图片的位置会出现一片空白，
// 图片懒加载就是使用一个loading图片来进行站位，等真正的图片加载完毕后再显示出来。


// const loadingSrc = 'https://www.imooc.com/static/img/index/logo2020.png';
// const imgSrc = 'https://img1.sycdn.imooc.com/5c09123400014ba418720632.jpg';

// const myImage = (function () {
//     const imgNode = document.createElement('img');
//     document.body.appendChild(imgNode);

//     const img = new Image();

//     img.onload = function () {
//         console.log('--------------->1', img.src);
//         imgNode.src = img.src;
//     }
//     return {
//         setSrc: function (src) {
//             console.log('--------------->2', img.src);
//             imgNode.src = loadingSrc;
//             setTimeout(() => {
//                 img.src = src;
//                 console.log('--------------->3', img.src);

//             }, 1000);
//         }
//     }
// })()

// myImage.setSrc(imgSrc)

// 使用代理模式实现图片懒加载
const loadingSrc = 'https://www.imooc.com/static/img/index/logo2020.png';

const imgSrc = 'https://img1.sycdn.imooc.com/5c09123400014ba418720632.jpg';

const myImage = (function () {
    const imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();

const proxyImage = (function () {
    const img = new Image();
    img.onload = function () {
        myImage.setSrc(img.src);
    }
    return {
        setSrc: function (src) {
            myImage.setSrc(loadingSrc);
            img.src = src;
        }
    }
})()

proxyImage.setSrc(imgSrc);

