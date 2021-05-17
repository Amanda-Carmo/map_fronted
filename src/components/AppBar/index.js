import React from "react";
import Logo from "../Logo";
import "./index.css";

export default function AppBar(props) {
  return (
    <div className="appbar">
      <Logo src="/center_covid_logo.png" />
      <span className="subtitle">Covid-map</span>
    </div>
  );
}