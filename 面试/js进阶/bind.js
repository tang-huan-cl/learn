// Function.prototype.myBind = function (context) {

//     if (typeof this !== 'function') {
//         throw new TypeError('error');
//     }

//     context = context || window;

//     const self = this;

//     const args = [...arguments].slice(1);

//     context.fn = (...arg) => {
//         self(...arg);
//         delete context.fn;
//     }

//     // var result = arguments[1] ? context.fn(...arguments[1]) : context.fn();

//     return result;
// }
// function foo() {
//     console.log(this.age);
// }
// var obj = {
//     age: 101
// }
// foo.myApply(obj); // 输出101


Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw TypeError('error');
    }
    const self = this;
    const args = [...arguments].slice(1);
    return function F() {
        if (this instanceof F) {
            return new self(...args, ...arguments);
        }
        return self.apply(context, args.concat(...arguments));
    }
}
function foo() {
    console.log(this.age);
}
var obj = {
    age: 121
}
var newFunc = foo.myBind(obj);
newFunc(); // 输出121s