import "./styles.css";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Container from "./Container";

export default function App() {
  let options = [];
  let optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    optionsRef.current.push(
      { label: "-- Select --", value: "0" },
      { label: "AAAA", value: "1" },
      { label: "BBBB", value: "2" }
    );
  });

  return (
    <div>
      <Container options={options} />
    </div>
  );
}
