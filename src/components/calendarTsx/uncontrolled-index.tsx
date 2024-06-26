import { useState } from "react";

interface CalendarProps {
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}
//这里Calendar组件传入两个props：defaultValue和onChange
//这种情况，调用者只能设置defaultValue初始值，不能直接修改value，所以是非受控模式
function Calendar(props: CalendarProps) {
  const { defaultValue = new Date(), onChange } = props;

//defaultValue会作为value的初始值
  const [value, setValue] = useState(defaultValue);

//当用户点击不同日期会修改value，然后回调onChange函数
  function changeValue(date: Date) {
    setValue(date);
    onChange?.(date);
  }

  return (
    <div>
      {value.toLocaleDateString()}
      <div
        onClick={() => {
          changeValue(new Date("2024-5-1"));
        }}
      >
        2023-5-1
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-2"));
        }}
      >
        2023-5-2
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-3"));
        }}
      >
        2023-5-3
      </div>
    </div>
  );
}

function App() {
  return (
    <Calendar
      defaultValue={new Date("2024-5-1")}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
      }}
    />
  );
}

export default App;
