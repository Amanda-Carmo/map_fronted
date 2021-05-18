import React, { useState } from "react";
import App from "../../App";
import AppBar from "../AppBar";
import "./index.css";
import axios from 'axios';
import { WorldMap } from "react-svg-worldmap"
import Popup from "./Popup"; 

const ReactDOM = require('react-dom');

  function calc(pais){
  axios.post("http://127.0.0.1:8000/api/maps/",{vac_propria: 'True',vac_pais: 60, disponibilidade_quarentena: "False",pais: "Brazil",idade: 33}).then((value) => {
    let varr = value;
    console.log("varr")
    console.log(typeof varr["data"])
    return  varr["data"]
  });

}

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
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
    <div>
      <div className="map-div" >
        <WorldMap onclick={togglePopup} onClick={togglePopup} className="map" color="red" title="Países disponíveis para você viajar, conforme suas condições" value-suffix="people" size="lg" data={data} />
      </div>
      
      {isOpen && <Popup
        content={<>
          <b>País selecionado!</b>
        </>}
      handleClose={togglePopup}
    />}
      
    </div>
  )
}


export default MapPage;

// const clickAction = (event: React.MouseEvent<SVGElement, MouseEvent>, countryName: string, isoCode: string, value: string, prefix?: string, suffix?: string) => {
//   //Your action on click that you want to perform see example in the examples folder called onclick-example
//   modal.style.display = "block";
//   closeBtn.addEventListener("click", ()=>{
//     modal.style.display = "none"
//   })
// }