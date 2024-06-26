import { useState, ChangeEvent } from "react";

//受控模式-写法1
//不推荐这种受控写法，受控写法的核心是由代码控制，而这里并未修改value
//同时serValue会导致App组件重复渲染
//什么时候用受控模式？
//需要对输入的值做处理之后设置到表单的时候，或者是你想实时同步状态值到父组件
//例如把用户输入的改为大写
function App() {
  console.log('render');
  
  const [value, setValue] = useState('yuan');

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setValue(event.target.value.toUpperCase())
  }

  //defaultValue作为value的初始值，然后用户输入触发 onChange 事件，通过 event.target 拿到了 value。
  return <input value={value} onChange={onChange} />;
}

//受控模式-写法2
// function App() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(inputRef.current?.value);
//     }, 1000);
//   }, []);
//   return <input defaultValue={"yuan"} ref={inputRef} />;
// }

export default App;
