

## 14_React 中监听 input 的 onChange 事件的原生事件是什么

React 中 onChange 的原生事件是什么？

```javascript
import "./styles.css";
 
export default function App() {
  return (
    <div className="App">
      <input
        onChange={(e) => {
          console.log("Event: ", e);
          console.log("NativeEvent: ", e.nativeEvent);
          console.log("CurrentTarget: ", e.nativeEvent.currentTarget);
          console.log("NativeEvent Type: ", e.nativeEvent.type);
        }}
      />
    </div>
  );
}
```