import React from "react";
import AppBar from "../AppBar";
import "./index.css";
import{
    BrowserRouter as Router, 
    Switch,
    Route, 
    Link, 
    Redirect,
    } from "react-router-dom";

export default function MapPage() {
  return (
        <div>
            <AppBar/>
            <h3 >Map</h3>
        </div>

  );
}