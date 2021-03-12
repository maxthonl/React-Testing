import React, { useState, useEffect, useRef, useCallback } from "react";
import Select from "react-select";

export default function Container(props) {
  const { options } = props;
  return (
    <div>
      <Select options={options} select={"1"}></Select>
    </div>
  );
}
