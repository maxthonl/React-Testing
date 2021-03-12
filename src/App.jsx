import "./styles.css";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Container from "./Container";
import Counter from "./Counter";
import { getUuids } from "./Mockservice";
import Select from "react-select";
import MSelect from "./MSelect";

export default function App() {
  const options = [];
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let uuids = await getUuids();
      options.push(
        ...uuids.map((x, i) => {
          return { label: x, value: i };
        })
      );
    }
    fetchData();
  });

  const handleClick = useCallback(() => {
    console.log(options[1]);
    setSelected(options[1]);
  });

  return (
    <div>
      <div> &nbsp; </div>
      <MSelect options={options} defaultOption={selected} />
      <div> &nbsp; </div>
      <button onClick={handleClick}>Set Second Option as Selected</button>
      <div> &nbsp; </div>
      <Counter />
    </div>
  );
}
