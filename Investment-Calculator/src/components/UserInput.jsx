import react from 'react';
import { useState } from 'react';

export default function UserInput() {

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
    <section>
      <div id="user-input">
        <h2>Investment Calculator</h2>
        <p>Enter your investment details below:</p>
        <form>
          <label>
            Initial Investment:
            <input type="number" required placeholder="Enter initial amount" onChange={(event) => handleChange('initialInvestment', event.target.value)} />
          </label>
          <label>
            Annual Investment:
            <input type="number" required placeholder="Enter annual contribution" onChange={(event) => { handleChange('annualInvestment', event.target.value) }} />
          </label>
          <label>
            Expected Return Rate:
            <input type="number" required placeholder="Enter expected return rate" onChange={(event) => handleChange('expectedReturn', event.target.value)} />
          </label>
          <label>
            Duration:
            <input type="number" required placeholder="Enter duration in years" onChange={(event) => handleChange('duration', event.target.value)} />
          </label>
          <button type="submit">Calculate</button>
        </form>
      </div>
    </section>
  );
};
