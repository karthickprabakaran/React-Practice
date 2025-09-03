import { useState } from "react"



export function RandomColour() {


  const [typerOfColour, setTypeOfColour] = useState('hex');
  const [colour, setColour] = useState('#000');


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
    console.log("the Rgb colour was generated")
  }

  return <>
    <div className="container" style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: colour
    }}>
      <button onClick={() => setTypeOfColour('hex')}>Create HEX colour </button>
      <button onClick={() => setTypeOfColour('rgb')}>Create RGB colour</button>
      <button onClick={typerOfColour === 'hex' ? handleCreateRandomHexColour : handleCreateRandomRgbColour}> Generate Random colour</button>
    </div >
  </>

}
