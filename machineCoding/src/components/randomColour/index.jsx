import { useEffect } from "react";
import { useState } from "react";

export function RandomColour() {
  const [colour, setColour] = useState("#000000");
  const [typeofColour, settypeofColour] = useState("hex");

  
  function getRandom(length){
    return Math.floor(Math.random() * length);
  }

  function handleHexcolour() {
    let hex = '#';
    const hexArr = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    for(let i=0;i<6;i++){
      hex += hexArr[getRandom(hexArr.length)];
    }
    console.log("this is the hex", hex);
    setColour(hex);
  }
  function handleRgbcolour() {

    let random1 = getRandom(256);
    let random3 = getRandom(256);
    let random2 = getRandom(256);

    let rgb = `rgb(${random1},${random2},${random3})`
    console.log(rgb);

    setColour(rgb);
    
  }

  return (
    <>
      <div className="background" style={{backgroundColor : colour}}>
        <div className="container">
          <h1>
             Generate Random Colour
            </h1> 
            <h1 className="colourDisplay">{colour}</h1>
          <div className="button">
          </div>
          <div className="buttonContainer">
            <button onClick={handleRgbcolour}>Generate RGB</button>
            <button onClick={handleRgbcolour}>Generate RGB</button>
          </div>
        </div>
      </div>
    </>
  );
}
