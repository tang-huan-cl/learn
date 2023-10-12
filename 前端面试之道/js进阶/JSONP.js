// JSONP实现跨域的原理是利用script标签没有跨域限制，
// 通过src指向一个ajax的URL，最后跟一个回调函数callback

function JSONP(url, data, callback) {
    const cbName = 'callback_' + new Date().getTime()
    const queryString = normalizeParams(data)
    const hasIndex = url.indexOf('?') !== -1
    url = `${hasIndex ? url : url + '?'}${queryString}&jsoncallback=${cbName}`
    const script = document.createElement('script')
    script.src = url
    window[cbName] = function (data) {
        callback(data)
        document.body.removeChild(script)
    }
    document.body.appendChild(script)
}
function normalizeParams(data) {
    if (!data || Object.keys(data).length === 0) {
        return ''
    }
    return Object.keys(data).map((key, index) => {
        return `${index ? '&' : ''}${key}=${data[key]}`
    })
}

const params = {
    name: 'AAA',
    age: 23,
    address: '广东'
}

JSONP('https://www.runoob.com/try/ajax/jsonp.php', params, function (data) {
    console.log(data)
})
