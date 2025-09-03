import { useEffect } from "react";
import { useState } from "react"



export function RandomColour() {


  const [typeOfColour, setTypeOfColour] = useState('hex');
  const [colour, setColour] = useState('#000');



  useEffect(() => {
    typeOfColour === "hex" ? handleCreateRandomHexColour() : handleCreateRandomRgbColour();
  }, [typeOfColour]);



  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColour() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexColour = "#";

    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }

    setColour(hexColour);
    console.log(hexColour + "this was the random colour generated");
  }


  function handleCreateRandomRgbColour() {

    let r = randomColourUtility(256);
    let g = randomColourUtility(256);
    let b = randomColourUtility(256);

    const rgb_colour = `rgb(${r},${g},${b})`;

    setColour(rgb_colour);


    console.log("the Rgb colour was generated")
  }

  return <>
    <div className="container" style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: colour,
    }}>
      <button onClick={() => setTypeOfColour('hex')}>Create HEX colour </button>
      <button onClick={() => setTypeOfColour('rgb')}>Create RGB colour</button>
      <button onClick={typeOfColour === 'hex' ? handleCreateRandomHexColour : handleCreateRandomRgbColour}> Generate Random colour</button>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>


        <h2>{typeOfColour}</h2>
        <h2>{colour}</h2>
      </div>
    </div >
  </>

}
