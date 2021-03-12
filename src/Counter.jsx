import React, { useEffect, useState } from "react";

export default function Counter() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const [copyCount, setCopyCount] = useState("");

  useEffect(() => {
    setCopyCount(count);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>useEffect clicked times: {copyCount}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
