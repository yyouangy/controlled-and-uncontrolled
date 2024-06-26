import { useEffect, useRef } from "react";

//非受控模式-写法1
// function App() {
//     console.log('render');

//   function onChange(event: ChangeEvent<HTMLInputElement>) {
//     console.log(event.target.value);
//   }

//   //defaultValue作为value的初始值，然后用户输入触发 onChange 事件，通过 event.target 拿到了 value。
//   return <input defaultValue={"yuan"} onChange={onChange} />;
// }

//非受控模式-写法2
function App() {
  console.log("render");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      console.log(inputRef.current?.value);
    }, 1000);
  }, []);
  return <input defaultValue={"yuan"} ref={inputRef} />;
}

export default App;
