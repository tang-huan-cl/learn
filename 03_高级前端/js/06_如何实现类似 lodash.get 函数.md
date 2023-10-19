
# 如何实现类似 lodash.get 函数



> 更多描述 使用 get 函数可避免长链的 key 时获取不到属性而出现问题，此时进行异常避免时及其服务，如 o.a && o.a.b && o.a.b.c && o.a.b.c.d


实现类似lodash.get，有以下测试用例:

```js
const object = { a: [{ b: { c: 3 } }] };
 
//=> 3
get(object, "a[0].b.c");
 
//=> 3
get(object, 'a[0]["b"]["c"]');
 
//=> 10086
get(object, "a[100].b.c", 10086);
```


```js
function get(source, path, defaultValue = undefined) {
  // a[3].b -> a.3.b -> [a, 3, b]
  const paths = path
    .replace(/\[(\w+)\]/g, ".$1")
    .replace(/\["(\w+)"\]/g, ".$1")
    .replace(/\['(\w+)'\]/g, ".$1")
    .split(".");
  let result = source;
  for (const p of paths) {
    result = result?.[p];
  }
  return result === undefined ? defaultValue : result;
}

const object = { a: [{ b: { c: 3 } }] };
const result = _.get(object, "a[0].b.c", 1);
```