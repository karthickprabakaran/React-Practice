import react from 'react';
import { useState } from 'react';

export default function UserInput({ onChange, userInput }) {

  console.log(userInput.initialInvestment);
  console.log(userInput.annualInvestment);
  console.log(userInput.expectedReturn);
  console.log(userInput.duration);


  return (
    <section>
      <div id="user-input">
        <h2>Investment Calculator</h2>
        <p>Enter your investment details below:</p>
        <form>
          <label>
            Initial Investment:
            <input type="number" value={userInput.initialInvestment} required placeholder="Enter initial amount" onChange={(event) => onChange('initialInvestment', event.target.value)} />
          </label>
          <label>
            Annual Investment:
            <input type="number" value={userInput.annualInvestment} required placeholder="Enter annual contribution" onChange={(event) => { onChange('annualInvestment', event.target.value) }} />
          </label>
          <label>
            Expected Return Rate:
            <input value={userInput.expectedReturn} type="number" required placeholder="Enter expected return rate" onChange={(event) => onChange('expectedReturn', event.target.value)} />
          </label>
          <label>
            Duration:
            <input value={userInput.duration} type="number" required placeholder="Enter duration in years" onChange={(event) => onChange('duration', event.target.value)} />
          </label>
          <button type="submit">Calculate</button>
        </form>
      </div>
    </section>
  );
};
