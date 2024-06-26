import { useState } from "react";

interface CalendarProps {
  value: Date;
  onChange?: (data: Date) => void;
}

//直接使用props传入的value，然后切换日期的时候回调onChange函数
function Calendar(props: CalendarProps) {
  const { value, onChange } = props;

  function changeValue(date: Date) {
    onChange?.(date);
  }

  return (
    <div>
      {value.toLocaleDateString()}
      <div onClick={() => changeValue(new Date("2024-06-23"))}>2024/06/23</div>
      <div onClick={() => changeValue(new Date("2024-06-24"))}>2024/06/24</div>
      <div onClick={() => changeValue(new Date("2024-06-25"))}>2024/06/25</div>
    </div>
  );
}

function App() {
  const [value, setValue] = useState(new Date("2024-06-22"));
  return (
    <div>
      <Calendar
        value={value}
        onChange={(date) => {
          console.log(date.toLocaleDateString());
          setValue(date);
        }}
      ></Calendar>
    </div>
  );
}

export default App;
