import React from "react";
import App from "../../App";
import AppBar from "../AppBar";
import "./index.css";
import axios from 'axios';
import { WorldMap } from "react-svg-worldmap"

const ReactDOM = require('react-dom');

  function calc(pais){
  axios.post("http://127.0.0.1:8000/api/maps/",{vac_propria: 'True',vac_pais: 60, disponibilidade_quarentena: "False",pais: "Brazil",idade: 33}).then((value) => {
    let varr = value;
    console.log("varr")
    console.log(typeof varr["data"])
    return  varr["data"]
  });

}


 export default function MapPage() {
  const data =  [
      { country: "cn", value:  calc("Brazil") }, // china
      { country: "in", value: 1311559204 }, // india
      { country: "us", value: 331883986 },  // united states
      { country: "id", value: 264935824 },  // indonesia
      { country: "pk", value: 210797836 },  // pakistan
      { country: "br", value: 210301591 },  // brazil
      { country: "ng", value: 208679114 },  // nigeria
      { country: "bd", value: 161062905 },  // bangladesh
      { country: "ru", value: 141944641 },  // russia
    ];

    const serializedState = JSON.parse(localStorage.getItem('data'));
    console.log(serializedState)

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
