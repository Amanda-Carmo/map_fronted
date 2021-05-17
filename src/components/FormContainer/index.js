import React from "react";
import "./index.css";

export default function FormContainer(props) {
  return <div className="container form-container">{props.children}</div>;
}