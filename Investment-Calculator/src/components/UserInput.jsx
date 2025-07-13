import react from 'react';
import { useState } from 'react';

export default function UserInput() {

  const [initialInvestment, setInitialInvestment] = useState('');
  const [annualInvestment, setAnnualInvestment] = useState('');
  const [expectedReturnRate, setExpectedReturnRate] = useState('');
  const [duration, setDuration] = useState('');

  return (
    <section>
      <div id="user-input">
        <h2>Investment Calculator</h2>
        <p>Enter your investment details below:</p>
        <form>
          <label>
            Initial Investment:
            <input type="number" required placeholder="Enter initial amount" />
          </label>
          <label>
            Annual Investment:
            <input type="number" required placeholder="Enter annual contribution" />
          </label>
          <label>
            Expected Return Rate:
            <input type="number" required placeholder="Enter expected return rate" />
          </label>
          <label>
            Duration:
            <input type="number" required placeholder="Enter duration in years" />
          </label>
          <button type="submit">Calculate</button>
        </form>
      </div>
      <section>
        );
}
