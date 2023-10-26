
```js
const users = await Promise.all(getUser(1), getUser(2), getUser(3));
```

那如何不使用 Promise.all 实现以上效果

使用 async/await 实现

```js
const user1 = getUser(1);
const user2 = getUser(2);
const user3 = getUser(3);
 
const u1 = await user1;
const u2 = await user2;
const u3 = await user3;
```





