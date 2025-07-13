import React from 'react';
import { useState } from 'react';
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";




function App() {


  const [userInput, setUserInput] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: ''
  });

  function handleChange(fieldName, newValue) {
    setUserInput({
      ...userInput,
      [fieldName]: newValue,
    });
  }





  return (
    <>
      <h1>React Investment Calculator</h1>

      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Result userInput={userInput} />
    </>
  )
}

export default App
