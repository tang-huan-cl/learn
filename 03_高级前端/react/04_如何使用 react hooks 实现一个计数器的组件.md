

# 如何使用 react hooks 实现一个计数器的组件

```js
import React, { useState, useEffect } from 'react'
import useCountDown from './useCountDown'
const useCountDown = (num) => {
    const [seconds, setSecond] = useState(num)
    useEffect(() => {
        setTimeout(() => {
            if (seconds > 0) {
                setSecond(c => c - 1);
            }
        }, 1000);
    }, [seconds]);
    return [seconds, setSecond]
}
// use it
const Demo = () => {
    const [seconds, setSecond] = useCountDown(0)
    return (
             <Button
                disable={seconds !== 0}
                onClick={() => setSecond(59)}
            >
                {seconds > 0 ? `${seconds}s后可点击` : '点击开始倒计时'}
            </Button>
        )
}
```








