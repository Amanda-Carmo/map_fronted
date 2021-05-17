import React from "react";
import App from "../../App";
import AppBar from "../AppBar";
import "./index.css";
import { WorldMap } from "react-svg-worldmap"

const ReactDOM = require('react-dom');



export default function MapPage() {
  const data =
    [
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
      { country: "us", value: 331883986 },  // united states
      { country: "id", value: 264935824 },  // indonesia
      { country: "pk", value: 210797836 },  // pakistan
      { country: "br", value: 210301591 },  // brazil
      { country: "ng", value: 208679114 },  // nigeria
      { country: "bd", value: 161062905 },  // bangladesh
      { country: "ru", value: 141944641 },  // russia
    ]
    

  return (
    <div className="map-div" >
       <WorldMap className="map" color="red" title="Países disponíveis para você viajar, conforme suas condições" value-suffix="people" size="lg" data={data} />
    </div>
  )
}


// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// )
