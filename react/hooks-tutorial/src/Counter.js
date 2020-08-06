import React, { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  useEffect(() => {
    console.log("렌더링 완료");
    console.log("value:", value);
    console.log("value2:", value2);
  }, [value, value2]);
  useEffect(() => {
    console.log("effect");
    console.log("value3:", value3);
    return () => {
      console.log("cleanup");
      console.log("value3:", value3);
    };
  });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>임
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>

      <button onClick={() => setValue2(value2 + 1)}>2</button>
      <button onClick={() => setValue3(value3 + 1)}>3</button>
    </div>
  );
};

export default Counter;
