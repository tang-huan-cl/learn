Function.prototype.myCall = function (context) {

    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }

    const symbolFn = Symbol();

    const args = [...arguments].slice(1);

    context = context || window;

    context[symbolFn] = this;

    const result = context[symbolFn](...args);
    delete context[symbolFn];
    return result;
}

const obj = {
    name: 'obj'
}

function foo() {
    console.log(this.name)
}

foo.myCall(obj) // obj