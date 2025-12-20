import { useState } from 'react'
import './style.css'

const RandomColour = () => {

  const [typeofColour, setTypeofColour] = useState("HEX");
  const [colour, setColour] = useState("#000000");


  function generateHexColour(){

    let numArr = [0,1,2,3,4,5,6,7,8,9];
    let hex = "#";

    for(let i=1;i<=6;i++){
      let randomNumber = Math.floor(Math.random() * numArr.length)
      hex += numArr[randomNumber];
    }

    setColour(hex);
  }

  function generateRgbColour(){
    console.log("RGB colour generated");
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);

    let colour = `rgb(${num1},${num2},${num3})`
    console.log("this is the RGB Colour", colour);

    setColour(colour);
    
    
  }

  function generateColour(){
    if(typeofColour === "HEX"){
      generateHexColour();
    }else{
      generateRgbColour();
    }
  }

  return (  
    <>
      <h1>Random Colour Generator</h1>
      <button onClick={()=> setTypeofColour("HEX")}>Create Hex Colour</button>
      <button onClick={()=> setTypeofColour("RGB")}>Create RGB Colour</button>
      <button onClick={()=> generateColour()}>Generate Random Colour</button>
      <h2>This is the Colour : {colour}</h2>
    <div className='colour' style={{backgroundColor:colour,
      width:"100vh",
      height: "100vh"
    }}>
    

    </div>
    </>
  )
}

export default RandomColour
