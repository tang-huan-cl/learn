Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('error');
    }
    context = context || window;
    context.fn = this;
    var result = arguments[1] ? context.fn(...arguments[1]) : context.fn();
    delete context.fn;
    return result;
}
function foo() {
    console.log(this.age);
}
var obj = {
    age: 101
}
foo.myApply(obj); // 输出101