import React, { useCallback, useEffect, useState, useRef } from "react";

export default function Counter() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const copyCount = useRef(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
    copyCount.current = count + 1;
  }, [count]);

  return (
    <div>
      <p>You clicked {copyCount.current} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
