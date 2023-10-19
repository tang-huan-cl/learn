

# 如何使用 async/await 实现 Promise.all 的效果

```js
const users = await Promise.all(getUser(1), getUser(2), getUser(3));
```


```js
const user1 = getUser(1);
const user2 = getUser(2);
const user3 = getUser(3);
 
const u1 = await user1;
const u2 = await user2;
const u3 = await user3;
```