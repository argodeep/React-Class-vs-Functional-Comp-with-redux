import React from "react";
import "./styles.css";
import FunctionalComponent from "./components/basic/function";
import ClassBasedComponent from "./components/basic/class";

export default function App() {
  return (
    <>
      <h5>Functional Component</h5>
      <FunctionalComponent />
      <h5>ClassBased Component</h5>
      <ClassBasedComponent />
    </>
  );
}
