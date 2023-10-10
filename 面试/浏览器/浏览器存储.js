// 浏览器存储有如下四种方法，每种方法都有不同支持，具体特性请参考表格

// cookie
// localStorage
// sessionStorage
// indexDB


// 设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
setCookie('name', 'why', 30);



// localStorage 和 sessionStorage
// 设置localStorage和sessionStorage

// localStorage.setItem('name','why');
// sessionStorage.setItem('age',23);


// 获取localStorage和sessionStorage

localStorage.setItem('name', 'why');
console.log(localStorage.getItem('name')); // 打印why
sessionStorage.setItem('age', 23);
console.log(sessionStorage.getItem('age'));// 打印23


