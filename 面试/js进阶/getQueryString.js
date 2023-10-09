
// 给定一段URL和参数的名称，获取此参数的值

var url = 'https://www.baidu.com/s?id=123&name=why&phone=13876769797';
function getQueryString(name) {
    var strs = '';
    var index = url.indexOf('?');
    if (index === -1) {
        return undefined
    }
    strs = url.substring(index + 1).split('&');
    for (let index = 0; index < strs.length; index++) {
        var splitItem = strs[index].split('=');
        if (splitItem[0] == name) {
            return splitItem[1];
        }
    }
};

// 测试：输出why
console.log(getQueryString('name')); 