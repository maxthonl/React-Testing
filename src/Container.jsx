import React, { useState, useEffect, useRef, useCallback } from "react";
import Select from "react-select";

export default function Container(props) {
  //const [option, setOption] = useState(0);
  const { options } = props;
  return (
    <>
      <div>
        <Select options={options}></Select>
      </div>
    </>
  );
}
