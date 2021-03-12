import React, { useState, useEffect, useRef, useCallback } from "react";
import Select from "react-select";

export default function MSelect(props) {
  const { options, defaultOption } = props;
  const [selected, setSelected] = useState(null);

  // console.log(defaultOption);

  useEffect(() => {
    setSelected(defaultOption);
  }, [defaultOption]);

  return (
    <div>
      <Select
        options={options}
        value={selected}
        onChange={(e) => setSelected(e)}
      ></Select>
      <div>Selected Option: {selected?.label} </div>
    </div>
  );
}
