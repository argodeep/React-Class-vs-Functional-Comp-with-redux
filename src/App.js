import React from "react";
import "./styles.css";
import FunctionalComponent from "./components/basic/function";
import ClassBasedComponent from "./components/basic/class";

export default function App() {
  return (
    <>
      <FunctionalComponent />
      <ClassBasedComponent />
    </>
  );
}
