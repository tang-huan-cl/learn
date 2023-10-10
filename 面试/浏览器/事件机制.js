// 注册事件
// 注册事件，我们一般使用addEventListener(name, callback, boolean)函数，
// 该函数支持三个参数，参数说明如下：

// name：代表待注册事件的名字，例如：click或者mouseover
// callback：代表注册事件的回调函数
// boolean：一个boolean值，为true代表事件捕获时触发，为false时代表事件冒泡时触发。
//          参数缺省时默认为false

// 一个注册事件的案例
// 点击DOM元素时。顺序打印出：捕获时触发 冒泡时触发
// var box = document.getElementById('box');

// box.addEventListener('click', () => {
//     console.log('捕获时触发');
// }, true);

// box.addEventListener('click', () => {
//     console.log('冒泡时触发');
// }, false);

// 事件触发顺序：
// 在浏览器中，事件的触发顺序一般而言依据：捕获 -> 目标阶段 -> 冒泡三个顺序。
// 但事件的触发顺序并不总是按以上顺序执行，
// 当我们给同一个DOM元素同时注册捕获和冒泡事件时，
// 事件的触发顺序是按你注册事件的顺序来执行的。

// 点击DOM元素时。顺序打印出：冒泡时触发 捕获时触发

// var box = document.getElementById('box');

// box.addEventListener('click', () => {

//     console.log('冒泡时触发');

// }, false);

// box.addEventListener('click', () => {

//     console.log('捕获时触发');

// }, true);


// 阻止事件冒泡： 
// stopPropagation()和stopImmediaPropagation()方法都能阻止事件的向上冒泡，
// 但这两者是有区别的：stopImmediaPropagation()还能阻止目标执行别的注册事件。


// 阻止事件冒泡
// 1. 当不阻止冒泡时，window的click会触发
// 2. 当使用stopPropagation()时，window的click不会被触发
// 3. 当使用stopImmediatePropagation()时，DOM的捕获事件不会触发，window的click不会触发
var box = document.getElementById('box');

box.addEventListener('click', (event) => {

    console.log('冒泡时触发');

    // event.stopPropagation();

    // event.stopImmediatePropagation();

}, false);

box.addEventListener('click', (event) => {

    console.log('捕获时触发');
    // event.stopPropagation();

    event.stopImmediatePropagation();

}, true);

window.addEventListener('click', (event) => {

    console.log('子元素点击事件向上冒泡时触发');

})

