import { useRef } from "react"


const Ref = () => {

  const number = useRef(0);

  function handleChange() {
    number.current++;
    console.log(`You clicked the number ${number.current} Times.`);
  }

  return (
    <div>
      <h2>This is an example for the userRef Hook</h2>
      <h1> This is the number to be rendered </h1>
      <button onClick={handleChange}>This is the number to change the number </button>
      <h2> {number.current}</h2>
    </div>
  )
}

export default Ref
