import { useState } from "react";
import "./Counter.css";
import { Button } from "../../atoms/Button/Button";

export function Counter() {
  const [count, setCount] = useState(0); // [ value, function modificaValue(){} ]

  const handleMinusClick = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <Button onClick={handleMinusClick}>-1</Button>
      <span>{count}</span>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}

export default Counter;
